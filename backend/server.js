import express from "express";
import cors from "cors";
import OpenAI from "openai";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const port = 3010;

// connect to DB
const pool = mysql.createPool({
  //host: "mysql",
  host: "localhost",
  user: "root",
  password: "root",
  database: "health-app",
});

// help function to make code look nicer
async function query(sql, params) {
  const [results] = await pool.execute(sql, params); // får en array, så måste vara [results]...?
  return results;
}

//Middleware

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/joke", async (req, res) => {
  //Tar emot input från frontend och storear i userQuery
  const userQuery = req.body.input;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a mental health coach only. You should not respond to anything that is not related to mental health, guidence, gratitude and life goals. If the user asks about anything else you should respond with a message explaining that you are not created to answer that question.",
        },
        {
          role: "user",
          content:
            userQuery ||
            "Please provide a short daily reflection, around 100 words, on an aspect of gratitude. Focus on different subjects each time, such as interactions, personal achievements, or everyday blessings.",
        },
      ],
    });

    console.log("OpenAI API Response:", JSON.stringify(completion, null, 2));

    //Här ligger meddelandet man får från open api
    const result = completion.choices[0].message.content;

    //skickar result tillbaka till frontend
    res.json({ joke: result });

    // STORING USERQUERY AND AIRESPONSE TO MYSQL
    const user_id = 1; // PLACEHOLDER USER_ID
    try {
      // create an empty account (0 kr) for the user, with the user_id attached to it
      const userQueryAndResponseSQLData = await query(
        "INSERT INTO chatgpt (user_id, user_query, ai_response) VALUES (?, ?, ?)",
        [user_id, userQuery, result]
      );
      console.log("userQuerySQLData: ", userQueryAndResponseSQLData[0]);
    } catch (error) {
      console.error("Error saving user query and ai response to mysql: ", error);
      return res.status(500).send("Error saving user query and ai response to mysql");
    }

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Unable to fetch a joke at this time.",
      details: error.message,
    });
  }
  
  

});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});

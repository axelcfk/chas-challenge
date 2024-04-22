import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const port = 3010;

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

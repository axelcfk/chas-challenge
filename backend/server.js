import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import fs from "fs";
dotenv.config();

const app = express();
const port = 3010;

//Middleware

app.use(cors());

app.use(bodyParser.json());

// const mockData = JSON.parse(fs.readFileSync("mockResponses.json", "utf8"));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/joke", async (req, res) => {
  const userQuery = req.body.input;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userQuery }],
    });

    console.log("OpenAI API Response:", JSON.stringify(completion, null, 2));

    const result = completion.choices[0].message.content;

    res.json({ joke: result });
  } catch (error) {
    console.error("Error with OpenAI API:", error);
    res.status(500).json({
      error: "Unable to fetch a joke at this time.",
      details: error.message,
    });
  }
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});

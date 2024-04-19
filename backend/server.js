import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fs from "fs";
dotenv.config();

const app = express();
const port = 3010;

//Middleware

app.use(cors());

app.use(bodyParser.json());

const mockData = JSON.parse(fs.readFileSync("mockResponses.json", "utf8"));

// const openAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/joke", async (req, res) => {
  const userQuery = req.body.input.toLowerCase();
  const jokeResponse = mockData.jokes.find((joke) =>
    userQuery.includes(joke.query.toLowerCase())
  );
  if (jokeResponse) {
    res.send(jokeResponse.response);
  } else {
    res.send("Sorry, I don't have a joke for that.");
  }
});
// const apiKey = process.env.OPENAI_API_KEY;

// const completion = await openAI.chat.completions.create({
//   messages: [{ role: "user", content: "Tell me a joke" }],
//   model: "gpt-3.5-turbo",
// });

// const result = completion.choices[0].message.content;

// res.send(result);
// });

app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});

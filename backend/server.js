import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const port = 3000;

//Middleware

app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Banking Backend!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});

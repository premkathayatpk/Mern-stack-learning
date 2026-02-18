import express from "express";
import connectDb from "./connectDb/connect.js";

const app = express();

app.get("/", (req, res) => {
  res.send("This is Home page");
});

connectDb();

app.listen(9000, (port) => {
  console.log("Server is running in port 9000");
});

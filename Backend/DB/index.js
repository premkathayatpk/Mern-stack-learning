import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.listen(9000, (port) => {
  console.log("Server is running in port 9000");
});

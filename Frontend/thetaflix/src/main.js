const express = require("express");
const app = express();
const port = 3000;

app.get("/dashboard", (req, res) => {
  res.send("Welcome to the dashboard!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
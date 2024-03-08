const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

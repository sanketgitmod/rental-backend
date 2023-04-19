require("dotenv").config();
const express = require("express");
const app = express();

require("./start/db")();

app.use("/", (req, res) => {
  res.send("working");
});

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);

const express = require("express");
const { products } = require("../data");
const logger = require("./logger"); 

const app = express();


app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", logger, (req, res) => {
  console.log("About Page");
});

app.listen(5000, () => {
  console.log("I'm listening on port 5000...");
});

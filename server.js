require("dotenv").config();

const express = require("express");

const app = express();

app.set("view engine", "ejs");

//home route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//login route

//start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
console.log(process.env.MYSECRET);

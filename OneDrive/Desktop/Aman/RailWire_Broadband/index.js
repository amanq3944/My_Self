const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

const staticPath = path.join(__dirname, '../views');
// built in middleware
// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/about", (req,res) => {
  res.render('about.ejs');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

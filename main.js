const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// Set view engine to EJS
app.set("view engine", "ejs");


// Route for home page
app.get("/", (req, res) => {
  const siteName = "Adidas";
  const searchText = "Search Now";
  res.render("index", { siteName, searchText });
});

// Route for blog
app.get("/blog/:slug", (req, res) => {
  const blogTitle = "Adidas Shoes";
  const blogContent = "Search Now";
  res.render("index", { blogTitle, blogContent });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/Company");

const Employee = require("./models/employee.js");

// Set view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", async (req, res) => {
  try {
    for (let index = 0; index < 10; index++) {
      await Employee.create({
        name: "Deepak " + index, // ensure unique name
        salary: 500000,
        language: "English",
        city: "Mumbai",
      });
    }
    res.render("index", { foo: "Data Inserted!" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error inserting data");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  salary: Number,
  language: String,
  city: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;

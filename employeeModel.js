const mongoose = require("mongoose");
const Joi = require("joi");

const employeeSchema = new mongoose.Schema({
  empId: {
    type: Number,
    required: true,
  },
  empName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  empEmail: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  empMobile: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
});

const Employee = new mongoose.model("Employee", employeeSchema);

module.exports.Employee = Employee;

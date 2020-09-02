const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const employee = require("./api");

mongoose
  .connect(
    "mongodb+srv://test-user153:qwerty123@cluster0.jrl5u.mongodb.net/employee-directory-db?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to server...."))
  .catch((err) => console.log(err.message));

app.use(express.json());

app.use(cors());

app.use("/api", employee);

PORT = 5000;

app.listen((PORT = process.env.PORT || 5000));

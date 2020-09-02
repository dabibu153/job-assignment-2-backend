const express = require("express");
const router = express.Router();
const { Employee } = require("./employeeModel");

router.post("/addEmployee", async (req, res) => {
  console.log(req.body);

  const employee = new Employee({
    empId: req.body.empId,
    empName: req.body.empName,
    empEmail: req.body.empEmail,
    empMobile: req.body.empMobile,
  });

  employee.save();
  res.send("New Employee Added");
});

router.get("/employeeList", async (req, res) => {
  const employeeList = await Employee.find();
  res.send(employeeList);
});

router.post("/deleteEmployee", async (req, res) => {
  console.log(req.body);
  await Employee.deleteOne({ _id: req.body.id });
  res.send("done");
});

module.exports = router;

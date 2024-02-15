import express from "express";
import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee,
} from "../controller/employeeController.js";
const employeeRoute = express.Router();
employeeRoute.get("/employee", getEmployees);
employeeRoute.get("/employee/:id", getEmployee);
employeeRoute.post("/employee", postEmployee);
employeeRoute.put("/employee/:id", putEmployee);
employeeRoute.delete("/employee/:id", deleteEmployee);

export default employeeRoute;

// payload
// {
//   "nik": "1103",
//   "name":"Budi",
//   "start_date":"2022-12-12",
//   "end_date": "2029-12-12",
//   "created_by": "admin",
//   "updated_by": "admin"
// }

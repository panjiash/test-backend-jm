import express from "express";
import {
  deleteEmployeeFamily,
  getEmployeeFamily,
  getEmployeeFamilys,
  postEmployeeFamily,
  putEmployeeFamily,
} from "../controller/employeeFamilyController.js";
const employeeFamily = express.Router();
employeeFamily.get("/employeeFamily", getEmployeeFamilys);
employeeFamily.get("/employeeFamily/:id", getEmployeeFamily);
employeeFamily.post("/employeeFamily", postEmployeeFamily);
employeeFamily.put("/employeeFamily/:id", putEmployeeFamily);
employeeFamily.delete("/employeeFamily/:id", deleteEmployeeFamily);
export default employeeFamily;

// payload
// {
//   "employee_id": 1,
//   "name":"Marni",
//   "identifier": "32100594109960002",
//   "job":"Ibu Rumah Tangga",
//   "place_of_birth": "Denpasar",
//   "date_of_birth": "1995-10-17",
//   "religion": "Islam",
//   "is_life": 1,
//   "is_divorced": 0,
//   "relation_status": "Istri",
//   "created_by": "admin",
//   "updated_by":"admin"
// }

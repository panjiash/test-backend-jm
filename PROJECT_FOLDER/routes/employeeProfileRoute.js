import express from "express";
import {
  deleteEmployeeProfile,
  getEmployeeProfile,
  getEmployeeProfiles,
  postEmployeeProfile,
  putEmployeeProfile,
} from "../controller/employeeProfileController.js";
const employeeProfileRoute = express.Router();
employeeProfileRoute.get("/employeeProfile", getEmployeeProfiles);
employeeProfileRoute.get("/employeeProfile/:id", getEmployeeProfile);
employeeProfileRoute.post("/employeeProfile", postEmployeeProfile);
employeeProfileRoute.put("/employeeProfile/:id", putEmployeeProfile);
employeeProfileRoute.delete("/employeeProfile/:id", deleteEmployeeProfile);
export default employeeProfileRoute;

// payload
// {
//   "employee_id": 1,
//   "place_of_birth": "Jakarta",
//   "date_of_birth": "1997-05-02",
//   "gender": "Laki-Laki",
//   "is_married": 1,
//   "prof_pict": "",
//   "created_by": "admin",
//   "updated_by": "admin"
// }

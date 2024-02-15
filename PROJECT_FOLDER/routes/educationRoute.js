import express from "express";
import {
  deleteEducation,
  getEducation,
  getEducations,
  postEducation,
  putEducation,
} from "../controller/educationController.js";

const educationRoute = express.Router();
educationRoute.get("/education", getEducations);
educationRoute.get("/education/:id", getEducation);
educationRoute.post("/education", postEducation);
educationRoute.put("/education/:id", putEducation);
educationRoute.delete("/education/:id", deleteEducation);
export default educationRoute;

// payload
// {
//   "employee_id": 1,
//   "name": "SMKN 7 Jakarta",
//   "level": "SMA",
//   "description": "Sekolah Menengah Atas",
//   "created_by": "admin",
//   "updated_by": "admin"
// }

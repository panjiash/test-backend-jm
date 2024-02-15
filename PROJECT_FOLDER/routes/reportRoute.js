import express from "express";
import { employeeReport } from "../controller/employeeReportController.js";
const reportRoute = express.Router();
reportRoute.get("/employeeReport", employeeReport);
export default reportRoute;

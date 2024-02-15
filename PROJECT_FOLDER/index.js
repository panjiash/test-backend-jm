import express from "express";
import FileUpload from "express-fileupload";
import employeeRoute from "./routes/employeeRoute.js";
import employeeProfileRoute from "./routes/employeeProfileRoute.js";
import educationRoute from "./routes/educationRoute.js";
import employeeFamily from "./routes/employeeFamily.js";
import reportRoute from "./routes/reportRoute.js";

const app = express();

app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(employeeRoute);
app.use(employeeProfileRoute);
app.use(educationRoute);
app.use(employeeFamily);
app.use(reportRoute);

app.listen(5003, () => console.log("Server Up and Running... on 5003"));

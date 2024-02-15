import db from "../config/db.js";
import Education from "../models/educationModel.js";
import EmployeeFamily from "../models/employeeFamilyModel.js";
import Employee from "../models/employeeModel.js";
import EmployeeProfile from "../models/employeeProfileModel.js";

export const employeeReport = async (_, res) => {
  try {
    let result = [];
    const [data] = await db.query(
      `SELECT e.id AS employee_id, e.nik, e.name, IF(e.is_active = 1, 'TRUE', 'FALSE') AS status, ep.gender, DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(), ep.date_of_birth)), '%Y')+0 AS age, ed.name AS school_name, ed.level, IFNULL(SUM(CASE WHEN ef.relation_status = 'Istri' THEN 1 ELSE 0 END), 0) AS istri, IFNULL(SUM(CASE WHEN ef.relation_status = 'Anak' THEN 1 ELSE 0 END), 0) AS anak FROM employees e JOIN employeeprofiles ep ON ep.employee_id = e.id JOIN educations ed ON ed.employee_id = e.id LEFT JOIN employeefamilys ef ON ef.employee_id = e.id GROUP BY e.id, e.nik, e.name, ep.gender, age, school_name, ed.level`
    );
    data.map((dat) => {
      result.push({
        employee_id: dat.employee_id,
        nik: dat.nik,
        name: dat.name,
        is_active: dat.status,
        gender: dat.gender,
        school_name: dat.school_name,
        level: dat.level,
        family_data: {
          istri: parseInt(dat.istri),
          anak: parseInt(dat.anak),
        },
      });
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

// employeeModel.js
import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js";
import EmployeeProfile from "./employeeProfileModel.js";
import EmployeeFamily from "./employeeFamilyModel.js";
import Education from "./educationModel.js";

const Employee = db.define(
  "Employee",
  {
    id: {
      type: DataTypes.BIGINT(255),
      primaryKey: true, // Define id as the primary key
      autoIncrement: true,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "employees",
    timestamps: true,
  }
);

Employee.hasOne(EmployeeProfile, { foreignKey: "employee_id", as: "profile" });
EmployeeProfile.belongsTo(Employee, {
  foreignKey: "employee_id",
  as: "profile",
});
Employee.hasMany(EmployeeFamily, { foreignKey: "employee_id", as: "family" });
Employee.hasMany(Education, { foreignKey: "employee_id", as: "education" });

export default Employee;

import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Employee from "./employeeModel.js";

const EmployeeFamily = db.define(
  "EmployeeFamily",
  {
    id: {
      type: DataTypes.BIGINT(255),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    employee_id: {
      type: DataTypes.BIGINT(255), // Assuming it's a foreign key referencing the Employee's primary key
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    identifier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    place_of_birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    religion: {
      type: DataTypes.ENUM("Islam", "Katolik", "Buda", "Protestan", "Konghucu"),
      allowNull: false,
    },
    is_life: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_divorced: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    relation_status: {
      type: DataTypes.ENUM("Suami", "Istri", "Anak", "Anak Sambung"),
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
    tableName: "employeefamilys",
    timestamps: true,
  }
);

// Employee.hasMany(EmployeeFamily, { foreignKey: "employee_id" });

(async () => {
  await db.sync();
})();

export default EmployeeFamily;

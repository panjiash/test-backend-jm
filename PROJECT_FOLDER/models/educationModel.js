import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Employee from "./employeeModel.js";

const Education = db.define(
  "Education",
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
    level: {
      type: DataTypes.ENUM(
        "Tk",
        "SD",
        "SMP",
        "SMA",
        "Strata 1",
        "Strata 2",
        "Doktor",
        "Profesor"
      ),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
    tableName: "educations",
    timestamps: true,
  }
);

// Employee.hasMany(Education, { foreignKey: "employee_id" });
(async () => {
  await db.sync();
})();

export default Education;

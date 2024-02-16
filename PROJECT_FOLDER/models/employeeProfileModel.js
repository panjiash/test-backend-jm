// employeeProfileModel.js
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const EmployeeProfile = db.define(
  "EmployeeProfile",
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
    place_of_birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    gender: {
      type: DataTypes.ENUM("Laki-Laki", "Perempuan"),
      allowNull: false,
    },
    is_married: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    prof_pict: {
      type: DataTypes.STRING,
      allowNull: true,
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
    tableName: "employeeprofiles",
    timestamps: true,
  }
);

(async () => {
  await db.sync();
})();

export default EmployeeProfile;

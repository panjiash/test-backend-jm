import { Sequelize } from "sequelize";

const db = new Sequelize("data_kepegawaian", "root", "panji123", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  timezone: "+07:00",
});

export default db;

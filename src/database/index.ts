import { Sequelize } from "sequelize";

const database = process.env.DBNAME || "";
const userName = process.env.USER_NAME || "";
const password = process.env.PASSWORD || "";

// Sequelize initialization
const sequelize = new Sequelize(database, userName, password, {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});


const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectToDB();

const db = {};

module.exports = db;
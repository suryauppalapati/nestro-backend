import { Sequelize } from "sequelize";
import config from "../config";

// Sequelize config to be used for model initialization (e.g., in hotel.model.ts)
const sequelize = new Sequelize({
  database: config.DB_NAME,
  host: config.DB_HOST,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  dialect: "mysql",
  // logging: true, // Enable query logging for debugging
});

export default sequelize;

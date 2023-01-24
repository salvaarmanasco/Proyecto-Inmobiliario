import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "pikika88",
  database: "todo",
  logging: false,
  models: [Todos],
});

export default connection;

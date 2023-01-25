import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import { Propiedad } from "../models/propiedad";
import { Estado } from "../models/estado";
import { Tipo } from "../models/tipo";
import { Zona } from "../models/zona";
import { Servicios } from "../models/servicios";
import { Precio } from "../models/precio";
import { Pais } from "../models/pais";
import { Provincia } from "../models/provincia";
import { Patio } from "../models/patio";
import { Usuario } from "../models/usuario";
import { Tipo_Usuario } from "../models/tipo_usuario";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "pikika88",
  database: "inmobiliaria_raes",
  logging: false,
  models: [
    Propiedad,
    Estado,
    Tipo,
    Zona,
    Servicios,
    Precio,
    Pais,
    Provincia,
    Patio,
    Usuario,
    Tipo_Usuario,
  ],
});

export default connection;

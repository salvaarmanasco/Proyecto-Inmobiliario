"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const propiedad_1 = require("../models/propiedad");
const estado_1 = require("../models/estado");
const tipo_1 = require("../models/tipo");
const zona_1 = require("../models/zona");
const servicios_1 = require("../models/servicios");
const precio_1 = require("../models/precio");
const pais_1 = require("../models/pais");
const provincia_1 = require("../models/provincia");
const patio_1 = require("../models/patio");
const usuario_1 = require("../models/usuario");
const tipo_usuario_1 = require("../models/tipo_usuario");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "pikika88",
    database: "inmobiliaria_raes",
    logging: false,
    models: [
        propiedad_1.Propiedad,
        estado_1.Estado,
        tipo_1.Tipo,
        zona_1.Zona,
        servicios_1.Servicios,
        precio_1.Precio,
        pais_1.Pais,
        provincia_1.Provincia,
        patio_1.Patio,
        usuario_1.Usuario,
        tipo_usuario_1.Tipo_Usuario,
    ],
});
exports.default = connection;

"use strict";

import { Model, UUIDV4 } from "sequelize";

interface UsuarioAttributes {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  phone: number;
  foto: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioAttributes> implements UsuarioAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    nombre!: string;
    apellido!: string;
    email!: string;
    phone!: number;
    foto!: string;
    static associate(models: any) {}
  }
  Usuario.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};

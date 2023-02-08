"use strict";

import { Model, UUIDV4 } from "sequelize";

interface EstadoAttributes {
  id: string;
  nombre_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Estado extends Model<EstadoAttributes> implements EstadoAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    nombre_estado!: string;
    static associate(models: any) {}
  }
  Estado.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      nombre_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Estado",
    }
  );
  return Estado;
};

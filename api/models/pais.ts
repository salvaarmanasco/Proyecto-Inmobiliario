"use strict";

import { Model, UUIDV4 } from "sequelize";

interface PaisAttributes {
  id: string;
  pais_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Pais extends Model<PaisAttributes> implements PaisAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    pais_estado!: string;
    static associate(models: any) {}
  }
  Pais.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      pais_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Pais",
    }
  );
  return Pais;
};

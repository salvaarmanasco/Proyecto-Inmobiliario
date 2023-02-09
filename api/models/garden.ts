"use strict";

import { Model, UUIDV4 } from "sequelize";

interface GardenAttributes {
  id: string;
  garden_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Garden extends Model<GardenAttributes> implements GardenAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    garden_estado!: string;
    static associate(models: any) {}
  }
  Garden.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      garden_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Garden",
    }
  );
  return Garden;
};

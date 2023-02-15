"use strict";

import { Model } from "sequelize";

interface GardenAttributes {
  id: string;
  garden_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Garden extends Model<GardenAttributes> implements GardenAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    garden_name!: string;
    static associate(models: any) {
      Garden.belongsToMany(models.Property, {
        through: "PropertyGarden",
      });
    }
  }
  Garden.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      garden_name: {
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

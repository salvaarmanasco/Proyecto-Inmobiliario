"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ZoneAttributes {
  id: string;
  zone_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Zone extends Model<ZoneAttributes> implements ZoneAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    zone_name!: string;
    static associate(models: any) {
      Zone.belongsToMany(models.Property, {
        through: "PropertyZone",
      });
    }
  }
  Zone.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      zone_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Zone",
    }
  );
  return Zone;
};

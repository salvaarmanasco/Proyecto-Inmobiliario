"use strict";

import { Model, UUIDV4 } from "sequelize";

interface TypesAttributes {
  id: string;
  types_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Types extends Model<TypesAttributes> implements TypesAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    types_name!: string;
    static associate(models: any) {
      Types.belongsToMany(models.Property, {
        through: "PropertyTypes",
      });
    }
  }
  Types.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      types_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Types",
    }
  );
  return Types;
};

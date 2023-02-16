"use strict";

import { Model, UUIDV4 } from "sequelize";

interface CategoryAttributes {
  id: string;
  category_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Category extends Model<CategoryAttributes> implements CategoryAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    category_name!: string;
    static associate(models: any) {
      Category.belongsToMany(models.Property, {
        through: "PropertyCategory",
      });
    }
  }
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};

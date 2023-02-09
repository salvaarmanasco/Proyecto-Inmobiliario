"use strict";

import { Model, UUIDV4 } from "sequelize";

interface PriceAttributes {
  id: string;
  price: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Price extends Model<PriceAttributes> implements PriceAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    price!: number;
    static associate(models: any) {}
  }
  Price.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Price",
    }
  );
  return Price;
};

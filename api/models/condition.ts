"use strict";

import { Model } from "sequelize";

interface ConditionAttributes {
  id: string;
  condition_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Condition
    extends Model<ConditionAttributes>
    implements ConditionAttributes
  {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    condition_name!: string;
    static associate(models: any) {
      Condition.belongsToMany(models.Property, {
        through: "PropertyCondition",
      });
    }
  }
  Condition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      condition_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Condition",
    }
  );
  return Condition;
};

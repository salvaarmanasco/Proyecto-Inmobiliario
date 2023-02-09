"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ConditionAttributes {
  id: string;
  name_estado: string;
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
    name_estado!: string;
    static associate(models: any) {}
  }
  Condition.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name_estado: {
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

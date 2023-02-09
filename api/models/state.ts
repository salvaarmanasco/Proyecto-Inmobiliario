"use strict";

import { Model, UUIDV4 } from "sequelize";

interface StateAttributes {
  id: string;
  state_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class State extends Model<StateAttributes> implements StateAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    state_estado!: string;
    static associate(models: any) {}
  }
  State.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      state_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "State",
    }
  );
  return State;
};

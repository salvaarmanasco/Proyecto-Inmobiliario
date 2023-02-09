"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ServicesAttributes {
  id: string;
  services_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Services
    extends Model<ServicesAttributes>
    implements ServicesAttributes
  {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    services_name!: string;
    static associate(models: any) {}
  }
  Services.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      services_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Services",
    }
  );
  return Services;
};

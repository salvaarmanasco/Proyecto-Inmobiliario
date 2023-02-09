"use strict";

import { Model, UUIDV4 } from "sequelize";

interface CountryAttributes {
  id: string;
  country_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Country extends Model<CountryAttributes> implements CountryAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    country_estado!: string;
    static associate(models: any) {}
  }
  Country.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      country_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Country",
    }
  );
  return Country;
};

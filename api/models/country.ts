"use strict";

import { Model } from "sequelize";

interface CountryAttributes {
  id: string;
  country_name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Country extends Model<CountryAttributes> implements CountryAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    country_name!: string;
    static associate(models: any) {
      Country.belongsToMany(models.Property, {
         through: "PropertyCountry",
      });
    }
  }
  Country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      country_name: {
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

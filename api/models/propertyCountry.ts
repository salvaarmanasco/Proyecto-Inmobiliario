"use strict";
import { Model } from "sequelize";

interface PropertyCountryAttributes {
  CountryId: number;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyCountry
    extends Model<PropertyCountryAttributes>
    implements PropertyCountryAttributes
  {
    CountryId!: number;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyCountry.init(
    {
      CountryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Country",
          key: "id",
        },
      },
      PropertyId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Property",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "PropertyCountry",
    }
  );
  return PropertyCountry;
};

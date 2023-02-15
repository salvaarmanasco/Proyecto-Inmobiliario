"use strict";
import { Model } from "sequelize";

interface PropertyZoneAttributes {
  ZoneId: number;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyZone
    extends Model<PropertyZoneAttributes>
    implements PropertyZoneAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ZoneId!: number;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyZone.init(
    {
      ZoneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Zone",
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
      modelName: "PropertyZone",
    }
  );
  return PropertyZone;
};

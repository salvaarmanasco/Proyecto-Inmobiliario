"use strict";
import { Model } from "sequelize";

interface PropertyUserAttributes {
  UserId: string;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyUser
    extends Model<PropertyUserAttributes>
    implements PropertyUserAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    UserId!: string;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyUser.init(
    {
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "User",
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
      modelName: "PropertyUser",
    }
  );
  return PropertyUser;
};

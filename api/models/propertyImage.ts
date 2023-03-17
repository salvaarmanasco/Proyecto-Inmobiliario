"use strict";
import { Model } from "sequelize";

interface PropertyImageAttributes {
  ImageId: number;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyImage
    extends Model<PropertyImageAttributes>
    implements PropertyImageAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    ImageId!: number;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyImage.init(
    {
      ImageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Image",
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
      modelName: "PropertyImage",
    }
  );
  return PropertyImage;
};

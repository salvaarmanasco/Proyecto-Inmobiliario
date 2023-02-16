"use strict";
import { Model } from "sequelize";

interface PropertyCategoryAttributes {
  CategoryId: number;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyCategory
    extends Model<PropertyCategoryAttributes>
    implements PropertyCategoryAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    CategoryId!: number;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyCategory.init(
    {
      CategoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Category",
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
      modelName: "PropertyCategory",
    }
  );
  return PropertyCategory;
};

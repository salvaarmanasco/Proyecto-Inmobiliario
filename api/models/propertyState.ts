"use strict";
import { Model } from "sequelize";

interface PropertyStateAttributes {
  StateId: number;
  PropertyId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class PropertyState
    extends Model<PropertyStateAttributes>
    implements PropertyStateAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    StateId!: number;
    PropertyId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  PropertyState.init(
    {
      StateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "State",
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
      modelName: "PropertyState",
    }
  );
  return PropertyState;
};

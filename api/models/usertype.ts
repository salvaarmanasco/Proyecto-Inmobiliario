"use strict";
import { Model } from "sequelize";

interface UserTypeAttributes {
  id: number;
  type: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class UserType
    extends Model<UserTypeAttributes>
    implements UserTypeAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    type!: string;
    static associate(models: any) {
      UserType.belongsToMany(models.User, { through: "UserAssignments" });
    }
  }
  UserType.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserType",
    }
  );
  return UserType;
};

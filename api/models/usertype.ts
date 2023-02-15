"use strict";
import { Model } from "sequelize";

interface UserTypeAttributes {
  id: number;
  admin: boolean;
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
    admin!: boolean;
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
      admin: {
        type: DataTypes.BOOLEAN,
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

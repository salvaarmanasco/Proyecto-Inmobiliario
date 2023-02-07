"use strict";
import { Model } from "sequelize";

interface UserAssignmentsAttributes {
  UserTypeId: number;
  UserId: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class UserAssignments
    extends Model<UserAssignmentsAttributes>
    implements UserAssignmentsAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    UserTypeId!: number;
    UserId!: string;
    static associate(models: any) {
      // define association here
    }
  }
  UserAssignments.init(
    {
      UserTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "UserType",
          key: "id",
        },
      },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserAssignments",
    }
  );
  return UserAssignments;
};

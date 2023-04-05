import { Model, UUIDV4 } from "sequelize";

interface UserAttributes {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: number;
  photo: string;
  wishList: string[];
  deleted: boolean;
  userType: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: string;
    name!: string;
    lastname!: string;
    email!: string;
    phone!: number;
    photo!: string;
    wishList!: string[];
    deleted!: boolean;
    userType!: number;
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      userType: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
        allowNull: false,
      },
      wishList: {
        type: DataTypes.TEXT,
        get() {
          const rawValue: any = this.getDataValue("wishList");
          if (typeof rawValue === "string" && rawValue.length > 0) {
            return rawValue.split(",");
          }
          return null;
        },
        set(value: any) {
          this.setDataValue("wishList", value ? value.join(",") : null);
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

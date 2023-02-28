"use strict";

import { Model } from "sequelize";

interface ImageAttributes {
  id: string;
  image_url: string;
  deleted: boolean;
  image_description: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Image extends Model<ImageAttributes> implements ImageAttributes {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    image_url!: string;
    deleted!: boolean;
    image_description!: string;
    static associate(models: any) {
      Image.belongsToMany(models.Property, {
        through: "PropertyImage",
      });
    }
  }
  Image.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};

"use strict";

import { Model, UUIDV4 } from "sequelize";

interface PropertyAttributes {
  id: string;
  antiquity: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  environments: number;
  pool: boolean;
  elevator: boolean;
  floor_th: number;
  orientation: string;
  m2_totals: number;
  m2_covered: number;
  garage: boolean;
  amenities: boolean;
  description: string;
  furnished: boolean;
  balcony: boolean;
  sign: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Property
    extends Model<PropertyAttributes>
    implements PropertyAttributes
  {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    antiquity!: number;
    address!: string;
    bedrooms!: number;
    bathrooms!: number;
    environments!: number;
    pool!: boolean;
    elevator!: boolean;
    floor_th!: number;
    orientation!: string;
    m2_totals!: number;
    m2_covered!: number;
    garage!: boolean;
    amenities!: boolean;
    description!: string;
    furnished!: boolean;
    balcony!: boolean;
    sign!: boolean;
    static associate(models: any) {
      Property.belongsToMany(models.Condition, {
        through: "PropertyCondition",
      });
    }
  }
  Property.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      antiquity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      environments: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pool: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      elevator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      floor_th: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orientation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      m2_totals: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      m2_covered: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      garage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      amenities: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      furnished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      balcony: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      sign: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};

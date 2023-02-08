"use strict";

import { Model, UUIDV4 } from "sequelize";

interface PropiedadAttributes {
  id: string;
  antiguedad: number;
  direccion: string;
  habitaciones: number;
  banos: number;
  ambientes: number;
  piscina: boolean;
  ascensor: boolean;
  piso: number;
  orientacion: string;
  m2_totales: number;
  m2_cubiertos: number;
  cochera: boolean;
  amenities: boolean;
  description: string;
  amoblado: boolean;
  balcon: boolean;
  cartel: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Propiedad
    extends Model<PropiedadAttributes>
    implements PropiedadAttributes
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
    antiguedad!: number;
    direccion!: string;
    habitaciones!: number;
    banos!: number;
    ambientes!: number;
    piscina!: boolean;
    ascensor!: boolean;
    piso!: number;
    orientacion!: string;
    m2_totales!: number;
    m2_cubiertos!: number;
    cochera!: boolean;
    amenities!: boolean;
    description!: string;
    amoblado!: boolean;
    balcon!: boolean;
    cartel!: boolean;
    static associate(models: any) {}
  }
  Propiedad.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      antiguedad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      habitaciones: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      banos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ambientes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      piscina: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      ascensor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      piso: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orientacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      m2_totales: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      m2_cubiertos: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cochera: {
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
      amoblado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      balcon: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      cartel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Propiedad",
    }
  );
  return Propiedad;
};

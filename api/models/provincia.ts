"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ProvinciaAttributes {
  id: string;
  provincia_estado: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Provincia
    extends Model<ProvinciaAttributes>
    implements ProvinciaAttributes
  {
    static unit(arg0: {}) {
      throw new Error("Method not implemented.");
    }
    id!: string;
    provincia_estado!: string;
    static associate(models: any) {}
  }
  Provincia.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      provincia_estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Provincia",
    }
  );
  return Provincia;
};

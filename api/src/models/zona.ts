import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "zona",
})
export class Zona extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_zona!: string;
}

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "tipo",
})
export class Tipo extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_tipo!: string;
}

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "pais",
})
export class Pais extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_pais!: string;
}

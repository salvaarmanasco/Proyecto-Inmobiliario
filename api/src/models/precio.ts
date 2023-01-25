import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "precio",
})
export class Precio extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  nombre_precio!: number;
}

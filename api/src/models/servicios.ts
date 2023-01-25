import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "servicios",
})
export class Servicios extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_servicios!: string;
}

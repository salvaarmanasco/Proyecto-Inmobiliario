import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "provincia",
})
export class Provincia extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_provincia!: string;
}

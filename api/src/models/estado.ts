import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "estado",
})
export class Estado extends Model {
  @Column({
    type: DataType.ENUM("1", "2", "3", "4"),
  })
  nombre_estado!: string;
}

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "usuario",
})
export class Usuario extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
  })
  apellido!: string;

  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @Column({
    type: DataType.BIGINT,
  })
  phone!: number;

  @Column({
    type: DataType.TEXT, // url?
  })
  foto!: string;
}

import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "tipo_usuario",
})
export class Tipo_Usuario extends Model {
  @Column({
    type: DataType.STRING,
  })
  nombre_tipo_usuario!: string;

  @Column({
    type: DataType.TEXT,
  })
  descripcion!: string;
}

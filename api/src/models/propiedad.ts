import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "propiedad",
})
export class Propiedad extends Model {
  @Column({
    type: DataType.INTEGER,
  })
  antiguedad!: number;

  @Column({
    type: DataType.TEXT, // que es text? vi que se uso en exootaku para direcciones
  })
  direccion!: string;

  @Column({
    type: DataType.INTEGER,
  })
  habitaciones!: number;

  @Column({
    type: DataType.INTEGER,
  })
  banos!: number;

  @Column({
    type: DataType.INTEGER,
  })
  ambientes!: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  piscina!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  ascensor!: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  piso!: number;

  @Column({
    type: DataType.ENUM("N", "NE", "E", "SE", "S", "SO", "O", "NO"),
  })
  orientacion!: string;

  @Column({
    type: DataType.INTEGER,
  })
  m2_totales!: number;

  @Column({
    type: DataType.INTEGER,
  })
  m2_cubiertos!: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  cochera!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  amenities!: boolean;
  @Column({
    type: DataType.TEXT,
  })
  descripcion!: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  amoblado!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  balcon!: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  cartel!: boolean;
}

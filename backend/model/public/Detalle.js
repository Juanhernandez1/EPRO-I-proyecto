import { Model } from "sequelize";

export default class Detalle extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        IdCita: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "citas",
              schema: "public"
            },
            key: "id_cita"
          },
          field: "id_cita"
        },
        IdServicio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "servicios",
              schema: "public"
            },
            key: "id_servicio"
          },
          field: "id_servicio"
        }
      },
      {
        sequelize,
        tableName: "detalle",
        schema: "public",
        timestamps: false
      }
    );
    return Detalle;
  }
}

import { Model } from "sequelize";

export default class Citas extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        IdCita: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "id_cita"
        },
        UidUsuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "usuarios",
              schema: "public"
            },
            key: "uid_usuario"
          },
          field: "uid_usuario"
        },
        UidNegocio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          references: {
            model: {
              tableName: "negocios",
              schema: "public"
            },
            key: "uid_negocio"
          },
          field: "uid_negocio"
        },
        Fecha: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "fecha"
        }
      },
      {
        sequelize,
        tableName: "citas",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "citas_pkey",
            unique: true,
            fields: [{ name: "id_cita" }]
          }
        ]
      }
    );
    return Citas;
  }
}

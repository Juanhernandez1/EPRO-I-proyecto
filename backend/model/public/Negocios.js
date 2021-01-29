import { Model } from "sequelize";

export default class Negocios extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidNegocio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "uid_negocio"
        },
        Nombre: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "nombre"
        },
        Descripcion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "descripcion"
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
        }
      },
      {
        sequelize,
        tableName: "negocios",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "negocios_pkey",
            unique: true,
            fields: [{ name: "uid_negocio" }]
          }
        ]
      }
    );
    return Negocios;
  }
}

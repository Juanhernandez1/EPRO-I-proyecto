import { Model } from "sequelize";

export default class Direcciones extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidNegocio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          references: {
            model: {
              tableName: "negocios",
              schema: "public"
            },
            key: "uid_negocio"
          },
          field: "uid_negocio"
        },
        Departamento: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "departamento"
        },
        Direccion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "direccion"
        },
        UrlDireccion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "url_direccion"
        }
      },
      {
        sequelize,
        tableName: "direcciones",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "direcciones_pkey",
            unique: true,
            fields: [{ name: "uid_negocio" }]
          }
        ]
      }
    );
    return Direcciones;
  }
}

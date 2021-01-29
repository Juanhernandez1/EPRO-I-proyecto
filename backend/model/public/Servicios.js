import { Model } from "sequelize";

export default class Servicios extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        IdServicio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "id_servicio"
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
        NombreServicio: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "nombre_servicio"
        },
        Descipcion: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "descipcion"
        },
        UrlImagen: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "url_imagen"
        },
        Precio: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          field: "precio"
        }
      },
      {
        sequelize,
        tableName: "servicios",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "servicios_pkey",
            unique: true,
            fields: [{ name: "id_servicio" }]
          }
        ]
      }
    );
    return Servicios;
  }
}

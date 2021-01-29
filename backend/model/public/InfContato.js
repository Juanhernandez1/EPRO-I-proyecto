import { Model } from "sequelize";

export default class InfContato extends Model {
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
        Telefono: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "telefono"
        },
        RedesSociales: {
          type: DataTypes.JSONB,
          allowNull: false,
          field: "redes_sociales"
        },
        Email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "email"
        }
      },
      {
        sequelize,
        tableName: "inf_contato",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "inf_contato_pkey",
            unique: true,
            fields: [{ name: "uid_negocio" }]
          }
        ]
      }
    );
    return InfContato;
  }
}

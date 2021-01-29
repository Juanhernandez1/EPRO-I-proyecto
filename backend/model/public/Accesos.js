import { Model } from "sequelize";

export default class Accesos extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidUsuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          references: {
            model: {
              tableName: "usuarios",
              schema: "public"
            },
            key: "uid_usuario"
          },
          field: "uid_usuario"
        },
        Usuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "usuario"
        },
        Contrasena: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "contraseña"
        },
        Tipo: {
          type: DataTypes.CHAR(1),
          allowNull: false,
          field: "tipo"
        }
      },
      {
        sequelize,
        tableName: "accesos",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "accesos_pkey",
            unique: true,
            fields: [{ name: "uid_usuario" }]
          }
        ]
      }
    );
    return Accesos;
  }
}

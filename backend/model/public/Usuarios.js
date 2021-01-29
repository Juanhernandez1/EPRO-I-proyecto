import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class Usuarios extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        UidUsuario: {
          type: DataTypes.STRING(255),
          allowNull: false,
          primaryKey: true,
          field: "uid_usuario"
        },
        Apellido: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "apellido"
        },
        Telefono: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "telefono"
        },
        Correo: {
          type: DataTypes.STRING(255),
          allowNull: false,
          field: "correo"
        }
      },
      {
        sequelize,
        tableName: "usuarios",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "usuarios_pkey",
            unique: true,
            fields: [{ name: "uid_usuario" }]
          }
        ]
      }
    );
    return Usuarios;
  }
}

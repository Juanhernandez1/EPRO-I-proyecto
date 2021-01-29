import { Sequelize, Op } from "sequelize";
import { config } from "dotenv";

config();

const CnDb = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

(async () => {
  try {
    await CnDb.authenticate();
    console.log("Conexión Establecida Satisfactoriamente. \u{1F680}");
  } catch (error) {
    console.error("No se puede conectar a la base de datos. \u{1F622}");
  }
})();

Sequelize.postgres.DECIMAL.parse = function (value) {
  return parseFloat(value);
};

async function TestConect() {
  try {
    await CnDb.authenticate();
    console.log("Conexión Establecida Satisfactoriamente. \u{1F680}");
  } catch (error) {
    console.error("No se puede conectar a la base de datos. \u{1F622}");
  }
}

export default {
  CnDb,
  Op,
  TestConect
};

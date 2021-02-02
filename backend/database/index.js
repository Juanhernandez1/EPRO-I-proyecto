import { Sequelize, Op } from "sequelize";
import { config } from "dotenv";

config();

const CnDb = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: true
  }
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

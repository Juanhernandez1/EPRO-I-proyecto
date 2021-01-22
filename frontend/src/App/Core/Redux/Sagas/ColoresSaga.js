const { call, put } = require('redux-saga/effects');

const API = require('../../API');
const { Creators } = require('../Actions');

const { GET } = API({ modelo: 'Colores' });
const { todos } = GET;
const { RespuestaGetAPIColores, PeticionGetAPIColoresFallo } = Creators;

function* getColores() {
  try {
    const carga = yield call(todos);
    if (carga) {
      yield put(RespuestaGetAPIColores(carga));
    } else {
      yield put(PeticionGetAPIColoresFallo());
    }
  } catch (error) {
    yield put(PeticionGetAPIColoresFallo());
  }
}

module.exports = { getColores };

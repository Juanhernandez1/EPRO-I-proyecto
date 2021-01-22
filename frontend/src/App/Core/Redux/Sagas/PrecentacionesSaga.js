const { call, put } = require('redux-saga/effects');

const API = require('../../API');
const { Creators } = require('../Actions');

const { GET } = API({ modelo: 'Precentacion' });
const { todos } = GET;
const { RespuestaGetAPIPrecentaciones, PeticionGetAPIPrecentacionesFallo } = Creators;

function* getPrecentaciones() {
  try {
    const carga = yield call(todos);
    if (carga) {
      yield put(RespuestaGetAPIPrecentaciones(carga));
    } else {
      yield put(PeticionGetAPIPrecentacionesFallo());
    }
  } catch (error) {
    yield put(PeticionGetAPIPrecentacionesFallo());
  }
}

module.exports = { getPrecentaciones };

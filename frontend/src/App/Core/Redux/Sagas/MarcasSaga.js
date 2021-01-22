const { call, put } = require('redux-saga/effects');

const API = require('../../API');
const { Creators } = require('../Actions');

const { GET } = API({ modelo: 'Marcas' });
const { todos } = GET;
const { RespuestaGetAPIMarcas, PeticionGetAPIMarcasFallo } = Creators;

function* getMarcas() {
  try {
    const carga = yield call(todos);
    if (carga) {
      yield put(RespuestaGetAPIMarcas(carga));
    } else {
      yield put(PeticionGetAPIMarcasFallo());
    }
  } catch (error) {
    yield put(PeticionGetAPIMarcasFallo());
  }
}

module.exports = { getMarcas };

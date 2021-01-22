const { call, put } = require('redux-saga/effects');

const API = require('../../API');
const { Creators } = require('../Actions');

const { GET } = API({ modelo: 'existenciaProductos' });
const { vista } = GET;
const {
  RespuestaGetAPIExistenciaProductosVista,
  PeticionGetAPIExistenciaProductosFallo
} = Creators;

function* getExistenciaProductos() {
  try {
    const carga = yield call(vista);
    if (carga) {
      yield put(RespuestaGetAPIExistenciaProductosVista(carga));
    } else {
      yield put(PeticionGetAPIExistenciaProductosFallo());
    }
  } catch (error) {
    yield put(PeticionGetAPIExistenciaProductosFallo());
  }
}

module.exports = { getExistenciaProductos };

const { call, put } = require('redux-saga/effects');

const API = require('../../API');
const { Creators } = require('../Actions');

const { GET } = API({ modelo: 'listaProducto' });
const { vista } = GET;
const { RespuestaGetAPIListaProductosVista, PeticionGetAPIListaProductosFallo } = Creators;

function* getListaProductos() {
  try {
    const carga = yield call(vista);
    if (carga) {
      yield put(RespuestaGetAPIListaProductosVista(carga));
    } else {
      yield put(PeticionGetAPIListaProductosFallo());
    }
  } catch (error) {
    yield put(PeticionGetAPIListaProductosFallo());
  }
}

module.exports = { getListaProductos };

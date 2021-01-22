const { takeLatest } = require('redux-saga/effects');
const { Types } = require('../Actions');
const { getEmpleado, setObjEmpleado } = require('./EmpleadoSaga');
const { getCargos } = require('./CargosSaga');
const { getListaProductos } = require('./ListaProductosSaga');
const { getExistenciaProductos } = require('./ExistenciaProductosSaga');
const { getMarcas } = require('./MarcasSaga');
const { getColores } = require('./ColoresSaga');
const { getPrecentaciones } = require('./PrecentacionesSaga');

function* Observador() {
  yield takeLatest(Types.PETICION_GET_API_EMPLEADOS_VISTA, getEmpleado);
  yield takeLatest(Types.OBJETO_EMPLEADO, setObjEmpleado);
  yield takeLatest(Types.PETICION_GET_API_CARGOS, getCargos);
  yield takeLatest(Types.PETICION_GET_API_LISTA_PRODUCTOS_VISTA, getListaProductos);
  yield takeLatest(Types.PETICION_GET_API_EXISTENCIA_PRODUCTOS_VISTA, getExistenciaProductos);
  yield takeLatest(Types.PETICION_GET_API_MARCAS, getMarcas);
  yield takeLatest(Types.PETICION_GET_API_COLORES, getColores);
  yield takeLatest(Types.PETICION_GET_API_PRECENTACIONES, getPrecentaciones);
}
module.exports = Observador;

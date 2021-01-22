const { call, put, takeEvery } = require('redux-saga/effects');

const API = require('../../API');
const { Types, Creators } = require('../Actions');

const { GET } = API({ modelo: 'empleados' });
const { vista } = GET;

const { GetApiEmpleadosVista, Error, ObjEmpleados } = Creators;

function* GetEmpleadoVista() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiEmpleadosVista(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    // TODO enviar los datos de error a reducers
    console.log(error.response.data);
    // ! yield put(call(Error));
  }
}

// * post
function* PostEmpleado() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiEmpleadosVista(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

// * put
function* putEmpleadoVista() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiEmpleadosVista(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

// * delete
function* deleteEmpleadoVista() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiEmpleadosVista(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

function* EmpleadoObjCRUD({ payload }) {
  console.log('payload: ', payload);
  try {
    yield put(ObjEmpleados(payload));
  } catch (error) {
    yield put(call(Error));
  }
}

function* ObservandoEmpleados() {
  yield takeEvery(Types.SAGA_GET_API_EMPLEADOS_VISTA, GetEmpleadoVista);
  yield takeEvery(Types.OBJ_EMPLEADOS_SAGA, EmpleadoObjCRUD);
}

module.exports = ObservandoEmpleados;

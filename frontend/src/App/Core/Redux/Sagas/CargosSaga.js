const { call, put, takeEvery } = require('redux-saga/effects');

const API = require('../../API');
const { Types, Creators } = require('../Actions');

const { GET } = API({ modelo: 'cargos' });
const { vista } = GET;

const { GetApiCargosTodos, Error, ObjCargos } = Creators;

function* GetCargoTodos() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiCargosTodos(datos));
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
function* PostCargo() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiCargosTodos(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

// * put
function* putCargoVista() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiCargosTodos(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

// * delete
function* deleteCargoVista() {
  try {
    const datos = yield call(vista);
    if (datos) {
      yield put(GetApiCargosTodos(datos));
    } else {
      yield put(call(Error));
    }
  } catch (error) {
    yield put(call(Error));
  }
}

function* CargoObjCRUD({ payload }) {
  try {
    yield put(ObjCargos(payload));
  } catch (error) {
    yield put(call(Error));
  }
}

function* ObservandoCargos() {
  yield takeEvery(Types.SAGA_GET_API_CARGOS_TODOS, GetCargoTodos);
}

module.exports = ObservandoCargos;

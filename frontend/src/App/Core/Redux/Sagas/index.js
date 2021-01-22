const { all, fork } = require('redux-saga/effects');
const ObservandoCargos = require('./CargosSaga');
const ObservandoEmpleados = require('./EmpleadoSaga');

module.exports = function* rootSaga() {
  yield all([fork(ObservandoEmpleados), fork(ObservandoCargos)]);
};

const ReducerCongf = require('./Reducers');

const empleados = ReducerCongf('empleados', 'vista');
const cargos = ReducerCongf('cargos', 'todos');

const rootReducer = {
  empleados,
  cargos
};

module.exports = rootReducer;

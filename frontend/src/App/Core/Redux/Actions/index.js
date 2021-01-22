const { createActions } = require('reduxsauce');

const { Types, Creators } = createActions(
  {
    SagaGetApiEmpleadosVista: null,
    GetApiEmpleadosVista: ['datos'],
    ObjEmpleados: ['obj'],
    ObjEmpleadosSaga: ['payload'],

    SagaGetApiCargosTodos: null,
    GetApiCargosTodos: ['datos'],
    ObjCargos: ['obj'],
    ObjCargosSaga: ['payload'],

    ResetEstadoError: null,
    ResetPeticion: null,
    Error: ['ErrorDatos']
  },
  {}
);

console.log(Types, Creators);
module.exports = { Types, Creators };

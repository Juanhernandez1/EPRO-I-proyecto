const { createReducer } = require('reduxsauce');

const { Types, Creators } = require('../Actions');

module.exports = function ReducerCongf(tabla, rutaGeneral) {
  const Tabla = tabla.toUpperCase();
  const RutaGeneral = rutaGeneral.toUpperCase();
  // * estado inicial
  const ESTADO_INICIAL = {
    error: false,
    errorMensaje: {},
    datos: [],
    vista: [],
    objetoXId: {},
    objetoX: {},
    busquedaMuchos: [],
    peticion: {},
    objReg: {}
  };
  // * test redux
  const sumar = (state = ESTADO_INICIAL) => {
    const { numero } = state;
    const n = numero + 1;
    return { ...state, numero: n };
  };

  const restar = (state = ESTADO_INICIAL) => {
    const { numero } = state;
    const n = numero - 1;
    return { ...state, numero: n };
  };

  let GetGeneral;

  if (RutaGeneral === 'TODOS') {
    // * para actions comptados
    GetGeneral = (state = ESTADO_INICIAL, action) => {
      return { ...state, error: false, datos: action.datos };
    };
  } else {
    // * para actions comptados
    GetGeneral = (state = ESTADO_INICIAL, action) => {
      return { ...state, error: false, vista: action.datos };
    };
  }

  // * para actions que fallaron
  const Fallo = (state = ESTADO_INICIAL, action) => {
    return { ...state, error: true, errorMensaje: action.ErrorDatos };
  };

  const ResetEstadoError = (state = ESTADO_INICIAL) => {
    return { ...state, error: false, errorMensage: {} };
  };

  const ResetPeticion = (state = ESTADO_INICIAL) => {
    return { ...state, peticion: {} };
  };

  const GetObj = (state = ESTADO_INICIAL, action) => {
    const objReg = action.obj;
    return { ...state, objReg };
  };

  // * objeto contenendor para configurar en reducers
  const CONTROLADOR = {
    [Types[`GET_API_${Tabla}_${RutaGeneral}`]]: GetGeneral,
    [Types[`OBJ_${Tabla}`]]: GetObj,
    [Types.RESET_ESTADO_ERROR]: ResetEstadoError,
    [Types.RESET_PETICION]: ResetPeticion,
    [Types.ERROR]: Fallo
  };

  return createReducer(ESTADO_INICIAL, CONTROLADOR);
};

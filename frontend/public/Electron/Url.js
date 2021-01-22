const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

/* ****************************************************************************** */
/* ************************* constantes para Url ******************************** */
const mainUrl = isDev
  ? 'http://localhost:3000/'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html'),
      hash: '/',
      protocol: 'file',
      slashes: true
    });

// * Url Empleados
const FormularioEmpleadoUrlCrear = isDev
  ? 'http://localhost:3000/#/frmEmpleado/Crear'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmEmpleado/Crear'),
      hash: '/frmEmpleado/Crear',
      protocol: 'file',
      slashes: true
    });

const FormularioEmpleadoUrlEliminar = isDev
  ? 'http://localhost:3000/#/frmEmpleado/Eliminar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmEmpleado/Eliminar'),
      hash: '/frmEmpleado/Eliminar',
      protocol: 'file',
      slashes: true
    });

const FormularioEmpleadoUrlActualizar = isDev
  ? 'http://localhost:3000/#/frmEmpleado/Actualizar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmEmpleado/Actualizar'),
      hash: '/frmEmpleado/Actualizar',
      protocol: 'file',
      slashes: true
    });

// * Url Productos
const FormularioProductosUrlCrear = isDev
  ? 'http://localhost:3000/#/frmProductos/Crear'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmProductos/Crear'),
      hash: '/frmProductos/Crear',
      protocol: 'file',
      slashes: true
    });

const FormularioProductosUrlEliminar = isDev
  ? 'http://localhost:3000/#/frmProductos/Eliminar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmProductos/Eliminar'),
      hash: '/frmProductos/Eliminar',
      protocol: 'file',
      slashes: true
    });

const FormularioProductosUrlActualizar = isDev
  ? 'http://localhost:3000/#/frmProductos/Actualizar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmProductos/Actualizar'),
      hash: '/frmProductos/Actualizar',
      protocol: 'file',
      slashes: true
    });

// * Url Existencias
const FormularioExistenciasUrlCrear = isDev
  ? 'http://localhost:3000/#/frmExistencias/Crear'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmExistencias/Crear'),
      hash: '/frmExistencias/Crear',
      protocol: 'file',
      slashes: true
    });

const FormularioExistenciasUrlEliminar = isDev
  ? 'http://localhost:3000/#/frmExistenciasEliminar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmExistencias/Eliminar'),
      hash: '/frmExistencias/Eliminar',
      protocol: 'file',
      slashes: true
    });

const FormularioExistenciasUrlActualizar = isDev
  ? 'http://localhost:3000/#/frmExistenciasActualizar'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmExistencias/Actualizar'),
      hash: '/frmExistencias/Actualizar',
      protocol: 'file',
      slashes: true
    });

const FormularioMarcas = isDev
  ? 'http://localhost:3000/#/frmMarcas'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmMarcas'),
      hash: '/frmMarcas',
      protocol: 'file',
      slashes: true
    });

const FormularioColores = isDev
  ? 'http://localhost:3000/#/frmColores'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmColores'),
      hash: '/frmColores',
      protocol: 'file',
      slashes: true
    });

const FormularioPrecentaciones = isDev
  ? 'http://localhost:3000/#/frmPrecentacones'
  : url.format({
      pathname: path.join(__dirname, '../build/index.html/#/frmPrecentacones'),
      hash: '/frmPrecentacones',
      protocol: 'file',
      slashes: true
    });

module.exports = {
  mainUrl,
  FormularioEmpleadoUrlCrear,
  FormularioEmpleadoUrlEliminar,
  FormularioEmpleadoUrlActualizar,
  FormularioProductosUrlCrear,
  FormularioProductosUrlEliminar,
  FormularioProductosUrlActualizar,
  FormularioExistenciasUrlCrear,
  FormularioExistenciasUrlEliminar,
  FormularioExistenciasUrlActualizar,
  FormularioColores,
  FormularioPrecentaciones,
  FormularioMarcas
};

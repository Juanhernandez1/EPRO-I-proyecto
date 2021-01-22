/* eslint-disable import/no-extraneous-dependencies */

/* ********** desabilitado advetencias porque no me gusta verlas **************** */
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
/* ****************************************************************************** */
/* ************************** importando electron ******************************* */
const { app, BrowserWindow, Menu, nativeImage, ipcMain } = require('electron');
const electronLocalshortcut = require('electron-localshortcut');

/* *********************** Dependencias para Electron  ************************** */
const isDev = require('electron-is-dev');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/* ************************** importando redux para estados globales ******************************* */
const { forwardToRenderer, triggerAlias, replayActionMain } = require('electron-redux');
const { createStore, applyMiddleware, combineReducers } = require('redux');
const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = require('../src/App/Core/Redux/Reducers');
const rootSaga = require('../src/App/Core/Redux/Sagas');

/* ************************* importando Elementos de Construction de Ventanas ********************************* */

const CrearFrm = require('./Electron/CrearFrm');
const ObjConfiguracionVentansFormularios = require('./Electron/ObjConfiguracionVentansFormularios');
const FormulariosCrud = require('./Electron/FormulariosCrud');
const {
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
} = require('./Electron/Url');

const {
  FRM_EMPLEADOS,
  FRM_COLORES,
  FRM_EXISTENCIAS,
  FRM_FACTURAS,
  FRM_TRASLADOS,
  FRM_MARCAS,
  FRM_PEDIDOS,
  FRM_PRODUCTOS,
  FRM_PRECENTACIONES,
  FRM_VENTASUNITARIAS,
  FRM_DEVOLUCIONES,
  FRM_EJECUTIVOS
} = ObjConfiguracionVentansFormularios(nativeImage);

const accion = { ingresar: 'Ingresar', eliminar: 'Eliminar', actualizar: 'Actualizar' };

/* ************************** Eliminar menu de electron ******************************* */
Menu.setApplicationMenu(null);

/* ************************** icono a la ventana electron ******************************* */
const image = nativeImage.createFromPath(path.join(__dirname, 'libreria.png'));
image.setTemplateImage(true);
/* ************************************************************************************ */
/* ************************** icono a la ventana electron ******************************* */
// * Empleados
let FRM_EMPLEADOS_CREAR;
let FRM_EMPLEADOS_ACTUALIZAR;
let FRM_EMPLEADOS_ELIMINAR;

// * Productos
let FRM_PRODUCTOS_CREAR;
let FRM_PRODUCTOS_ACTUALIZAR;
let FRM_PRODUCTOS_ELIMINAR;

// * Existencias
let FRM_EXISTENCIAS_CREAR;
let FRM_EXISTENCIAS_ACTUALIZAR;
let FRM_EXISTENCIAS_ELIMINAR;

let WIN_MARCAS;
let WIN_COLORES;
let WIN_PRECENTACIONES;

/* ************************************************************************************ */
/* ******** funcion principal para la creacion de ventans y envots de estas *********** */
function createWindow() {
  /* ************************************************************************************ */
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minHeight: 768,
    minWidth: 1024,
    width: 1024,
    backgroundColor: '#74b7e4',
    height: 768,
    maximizable: true,
    minimizable: true,
    title: 'Librería y Papelería Dany',
    icon: image,
    webPreferences: {
      spellcheck: true,
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadURL(mainUrl);
  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    if (isDev) {
      exec('killall node');
    }
  });

  // construyendo nuevas ventanas;
  // * Empleados
  FormulariosCrud({
    ventana: {
      ventna1: FRM_EMPLEADOS_CREAR,
      ventna2: FRM_EMPLEADOS_ACTUALIZAR,
      ventna3: FRM_EMPLEADOS_ELIMINAR
    },
    Urls: {
      url1: FormularioEmpleadoUrlCrear,
      url2: FormularioEmpleadoUrlEliminar,
      url3: FormularioEmpleadoUrlActualizar
    },
    CrearFrm,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion: FRM_EMPLEADOS,
    accion,
    tabla: 'Empleados'
  });

  // * Lista Productos
  FormulariosCrud({
    ventana: {
      ventna1: FRM_PRODUCTOS_CREAR,
      ventna2: FRM_PRODUCTOS_ACTUALIZAR,
      ventna3: FRM_PRODUCTOS_ELIMINAR
    },
    Urls: {
      url1: FormularioProductosUrlCrear,
      url2: FormularioProductosUrlEliminar,
      url3: FormularioProductosUrlActualizar
    },
    CrearFrm,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion: FRM_PRODUCTOS,
    accion,
    tabla: 'Productos'
  });

  // * Existencia Productos
  FormulariosCrud({
    ventana: {
      ventna1: FRM_EXISTENCIAS_CREAR,
      ventna2: FRM_EXISTENCIAS_ACTUALIZAR,
      ventna3: FRM_EXISTENCIAS_ELIMINAR
    },
    Urls: {
      url1: FormularioExistenciasUrlCrear,
      url2: FormularioExistenciasUrlEliminar,
      url3: FormularioExistenciasUrlActualizar
    },
    CrearFrm,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion: FRM_EXISTENCIAS,
    accion,
    tabla: 'Existencias'
  });

  // * Marcas

  CrearFrm(
    WIN_MARCAS,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    FRM_MARCAS,
    FormularioMarcas,
    'CRUD',
    'Marcas'
  );

  CrearFrm(
    WIN_PRECENTACIONES,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    FRM_PRECENTACIONES,
    FormularioPrecentaciones,
    'CRUD',
    'Precentaciones'
  );

  CrearFrm(
    WIN_COLORES,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    FRM_COLORES,
    FormularioColores,
    'CRUD',
    'Colores'
  );

  // mas elementos ...
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// * funciones de redux para tener el estado global en el proceso principal

const todoApp = combineReducers(rootReducer);

const store = createStore(
  todoApp,
  applyMiddleware(
    triggerAlias, // optional, see below
    sagaMiddleware,
    forwardToRenderer // IMPORTANT! This goes last
  )
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  console.log(store.getState());
});

replayActionMain(store);

// * leer archivo de configuración para la api

try {
  const RutaArchivo = path.join(__dirname, './configuracion.json');
  console.log('RutaArchivo: ', RutaArchivo);

  if (fs.existsSync(RutaArchivo)) {
    const rawdata = fs.readFileSync(RutaArchivo);
    const configuraciones = JSON.parse(rawdata);
    console.log(configuraciones);
  } else {
    fs.writeFileSync(
      RutaArchivo,
      JSON.stringify({
        puerto: 3000,
        host: 'localhost',
        api: 'V1'
      })
    );
  }
} catch (err) {
  console.error(err);
}

// * ventanas

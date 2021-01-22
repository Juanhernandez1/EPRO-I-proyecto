module.exports = function FormulariosCRUD(params) {
  const {
    ventana,
    Urls,
    CrearFrm,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion,
    accion,
    tabla
  } = params;
  const { ventna1, ventna2, ventna3 } = ventana;
  const { url1, url2, url3 } = Urls;

  const { ingresar, eliminar, actualizar } = accion;

  CrearFrm(
    ventna1,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion,
    url1,
    ingresar,
    tabla
  );

  CrearFrm(
    ventna2,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion,
    url2,
    eliminar,
    tabla
  );

  CrearFrm(
    ventna3,
    mainWindow,
    BrowserWindow,
    ipcMain,
    electronLocalshortcut,
    isDev,
    ObjContrucion,
    url3,
    actualizar,
    tabla
  );
};

/* eslint-disable no-param-reassign */
module.exports = function CrearFrm(
  ventana,
  VentanaPadre,
  BrowserWindow,
  ipcMain,
  electronLocalshortcut,
  isDev,
  objConstructor,
  URL,
  accion,
  tabla
) {
  ipcMain.addListener(`mostrar-Formulario-${tabla}_${accion}`, () => {
    if (ventana === null || ventana === undefined) {
      ventana = new BrowserWindow(objConstructor);
      ventana.setParentWindow(VentanaPadre);
      ventana.loadURL(URL);
      ventana.setTitle(accion === 'CRUD' ? tabla : accion);

      ventana.webContents.on('did-frame-finish-load', () => {
        electronLocalshortcut.register(ventana, 'Ctrl+G', () => {
          ventana.webContents.executeJavaScript(`
        var frm =  document.getElementById("frm_${tabla}_Aceptar");
        frm.click()
        frm=null;
        ;`);
        });
      });
    }

    if (ventana) {
      ventana.show();
      if (isDev) {
        ventana.webContents.openDevTools();
      }
    }

    ventana.on('close', e => {
      e.preventDefault();
      ventana.webContents.executeJavaScript(`
        var frmC =  document.getElementById("frm_${tabla}_Cancelar");
        frmC.click()
        frmC=null;
        ;`);
      ventana.hide();
    });
  });
};

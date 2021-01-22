const path = require('path');

/* ****************************************************************************** */

const ObjConfiguracionVentansFormularios = nativeImage => {
  const imageForm = nativeImage.createFromPath(path.join(__dirname, 'ventanaextra.png'));
  imageForm.setTemplateImage(true);
  // * **************** corresponden a Administración  **************** */
  const FRM_EMPLEADOS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    show: false,
    icon: imageForm,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  // * *********************************************************** */
  // * **************** corresponden al inventario *************** */
  const FRM_PRODUCTOS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    show: false,
    icon: imageForm,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  const FRM_EXISTENCIAS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    show: false,
    icon: imageForm,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  const FRM_TRASLADOS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    show: false,
    icon: imageForm,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  // * *********************************************************** */
  // * **************** corresponden a ventas ******************** */
  const FRM_FACTURAS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    icon: imageForm,
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  const FRM_VENTASUNITARIAS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    icon: imageForm,
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  const FRM_DEVOLUCIONES = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    icon: imageForm,
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  // * *********************************************************** */
  // * **************** corresponden a Proveedores *************** */
  const FRM_PEDIDOS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    icon: imageForm,
    backgroundColor: '#74b7e4',
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  const FRM_EJECUTIVOS = {
    minHeight: 450,
    minWidth: 724,
    width: 725,
    height: 325,
    resizable: false,
    backgroundColor: '#74b7e4',
    icon: imageForm,
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  // * *********************************************************** */
  // * ********** corresponden a Ventanas Individuales *********** */

  // * ventan individual
  const FRM_COLORES = {
    minHeight: 450,
    minWidth: 724,
    width: 750,
    height: 355,
    resizable: false,
    show: false,
    title: 'Empleado',
    backgroundColor: '#74b7e4',
    icon: imageForm,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };
  // * ventan individual
  const FRM_PRECENTACIONES = {
    minHeight: 450,
    minWidth: 724,
    width: 780,
    height: 455,
    resizable: false,
    icon: imageForm,
    show: false,
    backgroundColor: '#74b7e4',
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };
  // * ventan individual
  const FRM_MARCAS = {
    minHeight: 450,
    minWidth: 724,
    width: 750,
    height: 355,
    backgroundColor: '#74b7e4',
    resizable: false,
    icon: imageForm,
    show: false,
    title: 'Empleado',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, '../preload.js')
    }
  };

  return {
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
  };
};

module.exports = ObjConfiguracionVentansFormularios;

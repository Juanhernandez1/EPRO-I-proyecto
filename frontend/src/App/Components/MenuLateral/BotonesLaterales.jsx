import React from 'react';

export default function BotonesLaterales(objFun, Boton) {
  const {
    Fproductos,
    Fcolores,
    Fejecutivos,
    Fcaja,
    Fmarcas,
    Fprecentaciones,
    Fexistencias,
    Funitarias,
    Fventas,
    Ffacturas,
    Fproveedore,
    FAdministracion,
    Fconfiguracion,
    Fempleados,
    Freportes,
    Fpredido,
    Ftraslados,
    Fcambios,
    Frespaldo
  } = objFun;

  // * Boton principal productos
  const Productos = (
    <Boton
      Comando={Fproductos}
      Texto="Productos"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-trolley.svg`} alt="" width="50px" />
      }
    />
  );

  // * Botones Sub menu productos

  const iconoMarca = (
    <img
      src={`${process.env.PUBLIC_URL}/Iconos/icons8-registered-trademark.svg`}
      alt=""
      width="30px"
    />
  );
  const Marcas = <Boton Comando={Fmarcas} Texto="Marcas" Icono={iconoMarca} />;

  const Colores = (
    <Boton
      Comando={Fcolores}
      Texto="Colores"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-ios-photos.svg`} alt="" width="30px" />
      }
    />
  );

  const Precentaciones = (
    <Boton
      Comando={Fprecentaciones}
      Texto="Presentaciones"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-deviation.svg`} alt="" width="30px" />
      }
    />
  );

  const Existencias = (
    <Boton
      Comando={Fexistencias}
      Texto="Existencias"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-sell-stock.svg`} alt="" width="30px" />
      }
    />
  );

  const Traslados = (
    <Boton
      Comando={Ftraslados}
      Texto="Traslados"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-multichannel.svg`} alt="" width="30px" />
      }
    />
  );

  const menuProcustos = {
    Productos,
    subProd: [Marcas, Colores, Precentaciones, Existencias, Traslados]
  };

  // * Boton principal Ventas
  const iconoVentas = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-cash-register.svg`} alt="" width="50px" />
  );
  const Ventas = <Boton Comando={Fventas} Texto="Ventas" Icono={iconoVentas} />;

  // * Botones Sub menu ventas

  const iconoVentasI = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-sell.svg`} alt="" width="30px" />
  );
  const VentasIn = (
    <Boton
      Comando={Funitarias}
      Texto="Ventas Individiales"
      style={{ textAlign: 'initial' }}
      Icono={iconoVentasI}
    />
  );

  const Facturas = (
    <Boton
      Comando={Ffacturas}
      Texto="Facturas"
      Icono={<img src={`${process.env.PUBLIC_URL}/Iconos/icons8-bill.svg`} alt="" width="30px" />}
    />
  );

  const iconCambios = (
    <img
      src={`${process.env.PUBLIC_URL}/Iconos/icons8-available-updates.svg`}
      alt=""
      width="30px"
    />
  );
  const Cambios = (
    <Boton
      Comando={Fcambios}
      Texto="Cambios o Devoluciones"
      Icono={iconCambios}
      style={{ textAlign: 'initial' }}
    />
  );

  const menuVenta = {
    Ventas,
    subVen: [VentasIn, Facturas, Cambios]
  };

  // * Boton principal Proveedores
  const Proveedores = (
    <Boton
      Comando={Fproveedore}
      Texto="Proveedores"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-supplier.svg`} alt="" width="50px" />
      }
    />
  );
  // * Botones Sub menu proveedores
  const Ejecutivos = (
    <Boton
      Comando={Fejecutivos}
      Texto="Ejecutivos de Ventas"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-businessman.svg`} alt="" width="30px" />
      }
    />
  );

  const Pedidos = (
    <Boton
      Comando={Fpredido}
      Texto="Pedidos"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-delivery.svg`} alt="" width="30px" />
      }
    />
  );
  const menuProveedores = {
    Proveedores,
    subProv: [Ejecutivos, Pedidos]
  };

  const adminBtn = (
    <img
      src={`${process.env.PUBLIC_URL}/Iconos/icons8-admin-settings-male.svg`}
      alt=""
      width="50px"
    />
  );

  // * Boton principal Administracion
  const Administracion = (
    <Boton Comando={FAdministracion} Texto="Administracion" Icono={adminBtn} />
  );

  // * Botones Sub menu ventas
  const iconoCaja = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-cash-register2.svg`} alt="" width="30px" />
  );
  const Caja = <Boton Comando={Fcaja} Texto="Caja" Icono={iconoCaja} />;

  const iconoEmpleado = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-user.svg`} alt="" width="30px" />
  );
  const Empleados = <Boton Comando={Fempleados} Texto="Empleados" Icono={iconoEmpleado} />;

  const iconoReprote = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-business-report.svg`} alt="" width="30px" />
  );
  const Reportes = <Boton Comando={Freportes} Texto="Reportes" Icono={iconoReprote} />;

  const iconoRespaldo = (
    <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-data-backup.svg`} alt="" width="30px" />
  );
  const Respaldo = <Boton Comando={Frespaldo} Texto="Respaldo" Icono={iconoRespaldo} />;

  const menuAdministracion = {
    Administracion,
    subAdmin: [Reportes, Empleados, Caja, Respaldo]
  };

  // * Boton principal configuracion
  const Configuracion = (
    <Boton
      Comando={Fconfiguracion}
      Texto="Configuración"
      Icono={
        <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-settings.svg`} alt="" width="40px" />
      }
    />
  );

  return {
    menuProcustos,
    menuProveedores,
    menuVenta,
    menuAdministracion,
    Configuracion
  };
}

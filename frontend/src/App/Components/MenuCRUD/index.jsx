import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { func } from 'prop-types';
import Boton from '../Boton';

const { ipcRenderer } = require('electron');

const propTypes = {
  funTextIngresar: func,
  funTextActualizar: func,
  funTextEliminar: func
};

const defaultProps = {
  funTextIngresar: () => {},
  funTextActualizar: () => {},
  funTextEliminar: () => {}
};

export default function MenuCRUD(props) {
  const [activar, setActivar] = useState(false);

  const { funTextIngresar, funTextActualizar, funTextEliminar } = props;

  const iconosMenuCrud = {
    agregear: `${process.env.PUBLIC_URL}/Iconos/icons8-add-property.svg`,
    eliminar: `${process.env.PUBLIC_URL}/Iconos/icons8-delete-document.svg`,
    actualizar: `${process.env.PUBLIC_URL}/Iconos/icons8-edit-property.svg`,
    barras: `${process.env.PUBLIC_URL}/Iconos/icons8-barcode-reader.svg`,
    permiso: `${process.env.PUBLIC_URL}/Iconos/icons8-1password.svg`
  };
  const { agregear, eliminar, actualizar, barras, permiso } = iconosMenuCrud;
  return (
    <div className="contenedor munuCrud">
      <div className="crud">
        <Tooltip target=".boton" mouseTrack mouseTrackLeft={10} position="bottom" />
        <Boton
          mensaje="Agregar Un Registro"
          Texto=""
          Icono={<img src={agregear} alt="" width="20px" />}
          Comando={() => {
            if (window.location.hash === '#/Empleados') {
              ipcRenderer.send('mostrar-Formulario-Empleados_Ingresar');
            } else if (
              window.location.hash === '#/frmMarcas' ||
              window.location.hash === '#/frmColores' ||
              window.location.hash === '#/frmPrecentacones'
            ) {
              funTextIngresar();
            }
          }}
        />
        <Boton
          mensaje="Eliminar un Registro"
          Texto=""
          Icono={<img src={eliminar} alt="" width="20px" />}
          Comando={() => {
            if (window.location.hash === '#/Empleados') {
              ipcRenderer.send('mostrar-Formulario-Empleados_Eliminar');
            } else if (
              window.location.hash === '#/frmMarcas' ||
              window.location.hash === '#/frmColores' ||
              window.location.hash === '#/frmPrecentacones'
            ) {
              funTextEliminar();
            }
          }}
        />
        <Boton
          mensaje="Actualizar un Registro"
          Texto=""
          Icono={<img src={actualizar} alt="" width="40px" />}
          Comando={() => {
            if (window.location.hash === '#/Empleados') {
              ipcRenderer.send('mostrar-Formulario-Empleados_Actualizar');
            } else if (
              window.location.hash === '#/frmMarcas' ||
              window.location.hash === '#/frmColores' ||
              window.location.hash === '#/frmPrecentacones'
            ) {
              funTextActualizar();
            }
          }}
        />

        {window.location.hash === '#/Facturas' ||
          window.location.hash === '#/Ventas' ||
          (window.location.hash === '#/VentasIndividuales' && (
            <Boton
              mensaje="Lectura Automática"
              Texto=""
              Comando={() => {
                setActivar(!activar);
              }}
              style={{
                backgroundColor: activar ? '#e74c3c' : 'initial'
              }}
              Icono={<img src={barras} alt="" width="40px" />}
            />
          ))}

        <Boton mensaje="Permiso" Texto="" Icono={<img src={permiso} alt="" width="40px" />} />
      </div>
    </div>
  );
}

MenuCRUD.propTypes = propTypes;
MenuCRUD.defaultProps = defaultProps;

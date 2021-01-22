import React, { useContext } from 'react';
import Boton from '../Boton';
import { Contexto } from '../../Core/Context';
import './lista.css';

const propTypes = {};

const defaultProps = {};

const usuario = (
  <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-administrator-male.svg`} alt="" width="30px" />
);

const sesion = (
  <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-exit-sign.svg`} alt="" width="30px" />
);

const datosuser = (
  <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-badge.svg`} alt="" width="30px" />
);

export default function Encabezado() {
  const value = useContext(Contexto);
  const { abrir, nombreEmp, titulo, litaUsuario, verLista, FverSubmenu } = value;

  return (
    <header className="contenedor encabezado fuente">
      <div className="contenedor btnMenu fuente">
        <Boton
          Texto="Menu"
          Comando={() => {
            abrir();
            FverSubmenu(0);
            verLista(false);
          }}
        />
      </div>
      <div className="contenedor titulo fuente">
        <p className="textos">{titulo}</p>
      </div>
      <div className="contenedor btnUsuario fuente">
        <div className="dropdown fuente">
          <Boton
            Icono={usuario}
            Texto={nombreEmp}
            Comando={() => {
              verLista();
            }}
          />
          <div
            className="dropdown-content fuente"
            style={{ display: litaUsuario ? 'block' : 'none' }}
          >
            <Boton
              Icono={datosuser}
              Texto="Mis Datos"
              Comando={() => {
                verLista();
              }}
            />
            <Boton
              Icono={sesion}
              Texto="Cerrar sesión"
              Comando={() => {
                alert('cierre de secion');
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

Encabezado.propTypes = propTypes;
Encabezado.defaultProps = defaultProps;

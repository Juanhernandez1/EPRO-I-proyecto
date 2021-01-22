import React from 'react';
import { element, func, oneOf, string } from 'prop-types';

const propTypes = {
  Comando: func,
  Texto: string,
  Icono: element,
  type: oneOf(['button', 'submit', 'reset'])
};

const defaultProps = {
  Comando: () => {},
  Texto: 'Texto',
  Icono: <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-menu.svg`} alt="" width="30px" />,
  type: 'button'
};

export default function Boton(props) {
  const { Comando, Texto, Icono, style, mensaje, type, idProp } = props;
  return (
    <button
      type={type}
      id={idProp !== undefined || idProp !== null ? idProp : ''}
      className="boton contenedor fuente"
      onClick={() => {
        Comando();
      }}
      style={style}
      data-pr-tooltip={mensaje}
    >
      <div className="icono fuente">{Icono}</div>
      <div className="texto fuente">{Texto}</div>
    </button>
  );
}

Boton.propTypes = propTypes;
Boton.defaultProps = defaultProps;

import React from "react";
import PropTypes from "prop-types";

function MenuElemento(props) {
  const { Texto, Ancho, Icono, Estilo, ActivarSubrallado } = props;
  return (
    <div
      className='C1Encabezado MenuEncabezados'
      style={{ width: `${Ancho}` }}
      onClick={() => {
        ActivarSubrallado();
      }}
    >
      <div className='Texto'>{Texto === "null" ? Icono : Texto}</div>
      <div className={`menuGEncabezados ${Estilo}`} />
    </div>
  );
}

MenuElemento.propTypes = {
  Texto: PropTypes.string,
  Ancho: PropTypes.string,
  Icono: PropTypes.element,
  Estilo: PropTypes.string,
  ActivarSubrallado: PropTypes.func
};

MenuElemento.defaultProps = {
  ActivarSubrallado: () => {}
};

export default MenuElemento;

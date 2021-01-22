import React, { useContext } from 'react';
import { element } from 'prop-types';
import { Contexto } from '../../Core/Context';

const propTypes = {
  children: element
};

const defaultProps = {
  children: <h1>prueba</h1>
};

export default function Interno(props) {
  const value = useContext(Contexto);
  const { children } = props;
  const { verLista } = value;
  return (
    <div
      className="contenedor interno"
      onClick={() => {
        verLista(false);
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

Interno.propTypes = propTypes;
Interno.defaultProps = defaultProps;

import React from 'react';
import { element } from 'prop-types';

const propTypes = {
  children: element.isRequired
};

export default function Contenedor(props) {
  const { children } = props;
  return (
    <div
      className="contenedor base"
      style={{
        width: `calc(100% - ${window.innerWidth > 1024 ? '15em' : '13.125em'})`
      }}
    >
      {children}
    </div>
  );
}

Contenedor.propTypes = propTypes;

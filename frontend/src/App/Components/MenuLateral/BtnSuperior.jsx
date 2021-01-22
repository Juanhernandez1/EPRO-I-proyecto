import React from 'react';
import { element } from 'prop-types';

const propTypes = {
  Btn: element.isRequired
};

const defaultProps = {};

export default function BtnSuperior(props) {
  const { Btn } = props;
  return (
    <div className="contenedor submenu">
      <div className="alieadoSubMenu">
        <div className="contenedor superior">
          <div className="marca" />
          {Btn}
        </div>
      </div>
    </div>
  );
}

BtnSuperior.propTypes = propTypes;
BtnSuperior.defaultProps = defaultProps;

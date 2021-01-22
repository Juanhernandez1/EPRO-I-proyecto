import React from 'react';
import { arrayOf, bool, element } from 'prop-types';

const propTypes = {
  Btn: arrayOf(element),
  ver: bool
};

const defaultProps = {
  Btn: [],
  ver: false
};

export default function SubMenu(props) {
  const { ver, Btn } = props;
  const coregirAltura = Btn.length * 6 + 0.03 * (Btn.length - 2);
  const menuLista = Btn.map(item => (
    <React.Fragment key={item.props.Texto}>
      <div className="contenedor superior sub">
        <div className="marca" />
        {item}
      </div>
      <div className="divider" />
    </React.Fragment>
  ));

  return (
    <div
      className="contenedor submenu0"
      style={{
        display: ver ? 'flex' : 'none',
        height: `${coregirAltura}vh`
      }}
    >
      <div className="alieadoSubMenu0">{menuLista}</div>
    </div>
  );
}

SubMenu.propTypes = propTypes;
SubMenu.defaultProps = defaultProps;

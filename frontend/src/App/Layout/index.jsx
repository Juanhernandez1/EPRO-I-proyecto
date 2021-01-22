import React from 'react';
import { element } from 'prop-types';
import MenuLateral from '../Components/MenuLateral';
import Contenedor from '../Components/Contendor';
import Encabezado from '../Components/Encabezado';
import Interno from '../Components/Interno';
import MenuCRUD from '../Components/MenuCRUD';

const propTypes = {
  children: element
};

const defaultProps = {
  children: <h1>prueba</h1>
};

export default function Layout(props) {
  const { children } = props;
  return (
    <div className="App">
      <MenuLateral />
      <Contenedor>
        <>
          <Encabezado />
          <Interno>
            <>
              {window.location.hash !== '#/' && <MenuCRUD />}
              {children}
            </>
          </Interno>
        </>
      </Contenedor>
    </div>
  );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

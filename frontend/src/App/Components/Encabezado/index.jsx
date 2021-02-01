import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Estilos.css";
// * pascal case para rodas las funcion
function Encabezado(props) {
  const [state, setstate] = useState(true);
  const { texto } = props;

  return (
    <header className='Contendor'>
      <div className='logo'> </div>
      <h1>{`${texto} ${state}`}</h1>

      <div className='menu'>
        <button onClick={e => setstate(!state)}>Cambiar estado</button>
      </div>
    </header>
  );
}

Encabezado.propTypes = {
  texto: PropTypes.string
};

export default Encabezado;

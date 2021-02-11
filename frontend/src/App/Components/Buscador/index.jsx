import PropTypes from "prop-types";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Buscador(props) {
  const { Estilos, FnBuscar } = props;
  const { ContendorS, ContendorIS, IconoS, InputS } = Estilos;
  const [InputBuscar, setInputBuscar] = useState("");
  console.log(InputBuscar);
  return (
    <div className='BuscadorIndex' style={ContendorS}>
      <input
        type='text'
        name='Buscador'
        id='Buscador'
        placeholder='Buscar'
        style={InputS}
        onChange={e => setInputBuscar(e.target.value)}
        value={InputBuscar}
      />
      <button
        className='BtnBuscar'
        style={ContendorIS}
        onClick={e => {
          FnBuscar(InputBuscar);
        }}
      >
        <BiSearchAlt style={IconoS} />
      </button>
    </div>
  );
}

Buscador.propTypes = {
  Estilos: PropTypes.object,
  FnBuscar: PropTypes.func
};

Buscador.defaultProps = {
  Estilos: { ContendorS: {}, ContendorIS: {}, IconoS: {}, InputS: {} },
  FnBuscar: () => {}
};

export default Buscador;

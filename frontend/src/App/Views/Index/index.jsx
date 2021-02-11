import PropTypes, { element } from "prop-types";
import "./EstilosIndex.css";
import Card from "../../Components/Card";
import { Descripcion1, AnimacionTrabajos, AnimacionCalenadrio, AnimacionCoid } from "./Constnates";
import Buscador from "../../Components/Buscador";

const arrr = [AnimacionTrabajos, AnimacionCalenadrio, AnimacionCoid];

function Index(props) {
  return (
    <div className='Contendor AjusteIndex'>
      <div
        className='Banner'
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/banner2.png)` }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/Assets/clinica.jpg`}
          alt=''
          width='30%'
          style={{ borderRadius: " 0 15em 15em 0" }}
        />
        <img src={`${process.env.PUBLIC_URL}/Assets/image.png`} alt='QuedateEnCasa' width='34%' />
        <img
          src={`${process.env.PUBLIC_URL}/Assets/Negocio.jpg`}
          alt=''
          width='30%'
          style={{ borderRadius: "15em 0 0 15em" }}
        />
      </div>
      <Buscador
        Estilos={{
          ContendorS: {},
          ContendorIS: {},
          IconoS: { color: "#ffffff", fontZise: "20px" },
          InputS: {}
        }}
        FnBuscar={InputBuscar => console.log("si se puede:", InputBuscar)}
      />

      <div className='contendorCards'>
        {arrr.map((element, index) => (
          <Card
            Imgen={element}
            Decripcion={Descripcion1}
            Estilos={{
              EstilosCard: { width: "-webkit-fill-available" },
              EstilosTexos: {}
            }}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

Index.propTypes = {};

export default Index;

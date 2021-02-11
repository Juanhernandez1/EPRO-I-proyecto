import PropTypes from "prop-types";

function Card(props) {
  const { Imgen, Decripcion, Estilos } = props;
  const { EstilosCard, EstilosTexos } = Estilos;

  return (
    <div className='card' style={EstilosCard}>
      <div className='Canimacion'>{Imgen}</div>
      <div style={EstilosTexos}>{Decripcion}</div>
    </div>
  );
}

Card.propTypes = {
  Imgen: PropTypes.element,
  Decripcion: PropTypes.element
};

Card.defaultProps = {
  Estilos: {
    EstilosCard: {},
    EstilosTexos: {}
  }
};

export default Card;

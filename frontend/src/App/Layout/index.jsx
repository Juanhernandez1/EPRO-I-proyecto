import PropTypes from "prop-types";
import Encabezado from "../Components/Encabezado";
import "./EstilosLayout.css";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Encabezado />
      <div className='Contendor'>{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;

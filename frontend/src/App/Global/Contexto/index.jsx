import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

// creacion del contexto
export const Contexto = createContext();

function Appcontexto(props) {
  const [Activo, setActivo] = useState({
    Auth: false,
    Home: false,
    Blog: false,
    Practicas: false,
    Contacto: false,
    SobreMi: false,
    Conocimientos: false
  });
  const { children } = props;

  const SubRalladorNav = n => {
    const reset = {
      Auth: false,
      Home: false,
      Blog: false,
      Practicas: false,
      Contacto: false,
      SobreMi: false,
      Conocimientos: false
    };

    switch (window.location.pathname) {
      case "/":
        if (n === 1)
          setActivo({
            ...reset,
            SobreMi: true,
            Home: true
          });
        break;

      case "/Blog":
        setActivo({
          ...reset,
          Blog: true
        });
        break;

      case "/Practicas":
        setActivo({
          ...reset,
          Practicas: true
        });
        break;

      case "/Contactame":
        setActivo({
          ...reset,
          Contacto: true
        });
        break;
      case "/ConosimientosEn":
        setActivo({
          ...reset,
          Conocimientos: true
        });
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    SubRalladorNav(1);
  }, []);

  const objGlobal = {
    Activo,
    SubRalladorNav
  };
  return <Contexto.Provider value={objGlobal}>{children}</Contexto.Provider>;
}

Appcontexto.propTypes = {
  children: PropTypes.element.isRequired
};

export default Appcontexto;

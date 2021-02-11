import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "./EstilosEncabezados.css";
import { Contexto } from "../../Global/Contexto";
import MenuElemento from "../MenuElemento";

// * pascal case para rodas las funcion
function Encabezado(props) {
  const value = useContext(Contexto);

  const { Activo, SubRalladorNav } = value;

  const Inicio = (
    <div className='InicioEncabezados'>
      <div>{`Logo`}</div>
    </div>
  );

  return (
    <header className='App-header'>
      <div className='C1Encabezado'>
        <MenuElemento
          Texto='null'
          Icono={Inicio}
          Ancho='auto'
          Estilo={Activo.Home ? "subralladoActivo" : "Nosubrallado"}
          ActivarSubrallado={() => {
            /*history.push({
                pathname: "/"
              });*/
            SubRalladorNav(1);
          }}
        />
      </div>
      <div className='C1Encabezado'>
        <nav className='NavegacionEncabezados'>
          <ul>
            <li>
              <MenuElemento
                Texto='Negocios'
                Ancho='auto'
                Estilo={Activo.Blog ? "subralladoActivo" : "Nosubrallado"}
                ActivarSubrallado={() => {
                  /*history.push({
                      pathname: "/Blog"
                    });*/
                  SubRalladorNav();
                }}
              />
            </li>

            <li>
              <MenuElemento
                Texto='Contacta Nos'
                Ancho='auto'
                Estilo={Activo.Contacto ? "subralladoActivo" : "Nosubrallado"}
                ActivarSubrallado={() => {
                  /*history.push({
                      pathname: "/Contactame"
                    });*/
                  SubRalladorNav();
                }}
              />
            </li>

            <li style={{ display: Activo.Auth ? "block" : "none" }}>
              <MenuElemento
                Texto='Usuario'
                Ancho='auto'
                Estilo={Activo.Auth ? "subralladoActivo" : "Nosubrallado"}
                ActivarSubrallado={() => {
                  /*history.push({
                      pathname: "/Blog"
                    });*/
                  SubRalladorNav();
                }}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Encabezado.propTypes = {
  texto: PropTypes.string
};

export default Encabezado;

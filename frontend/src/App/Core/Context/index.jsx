import React, { Component } from 'react';
import PropTypes from 'prop-types';

// creacion del contexto
export const Contexto = React.createContext();

// creacion del proveedor de Contexto
export class Appcontexto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // informacion de autenticasion
      idSucursal: 'Rst',
      idEmpleado: '1',
      nombreEmp: 'Juan',
      titulo: 'Librería y Papelería Dany',
      // Control de Visualisacion menu latreal
      verMenuLateral: false,

      // Control de Visualisacion de sub menus
      verSubmenu1: false,
      verSubmenu2: false,
      verSubmenu3: false,
      verSubmenu4: false,

      litaUsuario: false
    };
  }

  // funcion para abrir o cerrar el menu latral
  AbrirMenu() {
    const { verMenuLateral } = this.state;
    this.setState({
      verMenuLateral: !verMenuLateral
    });
  }

  // funcion para mostrar y ocultar el sub menu indicado
  VerSubmenu(num) {
    const { verSubmenu1, verSubmenu2, verSubmenu3, verSubmenu4 } = this.state;
    switch (num) {
      case 1:
        this.setState({
          verSubmenu1: !verSubmenu1,
          verSubmenu4: false,
          verSubmenu3: false,
          verSubmenu2: false
        });
        break;
      case 2:
        this.setState({
          verSubmenu2: !verSubmenu2,
          verSubmenu1: false,
          verSubmenu3: false,
          verSubmenu4: false
        });
        break;
      case 3:
        this.setState({
          verSubmenu3: !verSubmenu3,
          verSubmenu4: false,
          verSubmenu1: false,
          verSubmenu2: false
        });
        break;
      case 4:
        this.setState({
          verSubmenu4: !verSubmenu4,
          verSubmenu3: false,
          verSubmenu1: false,
          verSubmenu2: false
        });
        break;

      default:
        this.setState({
          verSubmenu1: false,
          verSubmenu2: false,
          verSubmenu3: false,
          verSubmenu4: false
        });
        break;
    }
  }

  verlistaUsuario() {
    const { litaUsuario } = this.state;
    this.setState({ litaUsuario: !litaUsuario });
  }

  // Renderizando componente y aplicando datos a utilizar del contexto
  render() {
    const {
      verMenuLateral,
      verSubmenu1,
      verSubmenu2,
      verSubmenu3,
      verSubmenu4,
      listo,
      idSucursal,
      idEmpleado,
      nombreEmp,
      litaUsuario,
      titulo
    } = this.state;

    const { children } = this.props;
    return (
      <Contexto.Provider
        value={{
          idSucursal,
          idEmpleado,
          nombreEmp,
          titulo,
          verMenuLateral,
          verSubmenu1,
          verSubmenu2,
          verSubmenu3,
          verSubmenu4,
          litaUsuario,
          listo,
          abrir: () => {
            this.AbrirMenu();
          },
          FverSubmenu: num => {
            this.VerSubmenu(num);
          },
          verLista: bool => {
            if (bool === undefined) {
              this.verlistaUsuario();
            } else {
              this.setState({ litaUsuario: bool });
            }
          }
        }}
      >
        {children}
      </Contexto.Provider>
    );
  }
}

Appcontexto.propTypes = {
  children: PropTypes.element.isRequired
};

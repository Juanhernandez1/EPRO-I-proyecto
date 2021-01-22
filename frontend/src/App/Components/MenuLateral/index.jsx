import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { element } from 'prop-types';
import Boton from '../Boton';
import { Contexto } from '../../Core/Context';
import SubMenu from './SubMenu';
import BtnSuperior from './BtnSuperior';
import BotonesLaterales from './BotonesLaterales';

const { ipcRenderer } = require('electron');

const propTypes = {
  Logo: element
};

const defaultProps = {
  Logo: <img src={`${process.env.PUBLIC_URL}/Iconos/icons8-image.svg`} alt="" width="60px" />
};

// `mostrar-Formulario-${tabla}_${accion}`
export default function MenuLateral(props) {
  const value = useContext(Contexto);
  const { Logo } = props;
  const history = useHistory();
  const { verMenuLateral, verSubmenu1, verSubmenu2, verSubmenu3, verSubmenu4, FverSubmenu } = value;
  const objFun = {
    Fproductos: () => {
      FverSubmenu(1);
      history.push({
        pathname: '/Productos'
      });
    },
    Fventas: () => {
      FverSubmenu(2);
      history.push({
        pathname: '/Ventas'
      });
    },
    Fproveedore: () => {
      FverSubmenu(3);
      history.push({
        pathname: '/Proveedores'
      });
    },
    FAdministracion: () => {
      FverSubmenu(4);
      history.push({
        pathname: '/Administracion'
      });
    },
    Fconfiguracion: () => {
      history.push({
        pathname: '/Configuracion'
      });
    },
    Fcolores: () => {
      ipcRenderer.send('mostrar-Formulario-Colores_CRUD');
    },
    Fejecutivos: () => {
      history.push({
        pathname: '/EjecutivosVentas'
      });
    },
    Fcaja: () => {
      history.push({
        pathname: '/Caja'
      });
    },
    Fmarcas: () => {
      ipcRenderer.send('mostrar-Formulario-Marcas_CRUD');
    },
    Fprecentaciones: () => {
      ipcRenderer.send('mostrar-Formulario-Precentaciones_CRUD');
    },
    Fexistencias: () => {
      history.push({
        pathname: '/Existencias'
      });
    },
    Funitarias: () => {
      history.push({
        pathname: '/VentasIndividuales'
      });
    },
    Ffacturas: () => {
      history.push({
        pathname: '/Facturas'
      });
    },
    Fempleados: () => {
      history.push({
        pathname: '/Empleados'
      });
    },
    Freportes: () => {
      history.push({
        pathname: '/Reportes'
      });
    },
    Fpredido: () => {
      history.push({
        pathname: '/Pedidos'
      });
    },
    Ftraslados: () => {
      history.push({
        pathname: '/Traslados'
      });
    },
    Fcambios: () => {
      history.push({
        pathname: '/CambiosDevoluciones'
      });
    },
    Frespaldo: () => {
      history.push({
        pathname: '/Respaldos'
      });
    }
  };

  const {
    menuProcustos,
    menuProveedores,
    menuVenta,
    menuAdministracion,
    Configuracion
  } = BotonesLaterales(objFun, Boton);

  const { Productos, subProd } = menuProcustos;
  const { Ventas, subVen } = menuVenta;
  const { Proveedores, subProv } = menuProveedores;
  const { Administracion, subAdmin } = menuAdministracion;

  const ventana = () => {
    if (verMenuLateral) {
      if (window.innerWidth > 1024) {
        return '15em';
      }
      return '13.125em';
    }
    return '0em';
  };

  return (
    <nav
      className="sidebar"
      style={{
        width: ventana()
      }}
    >
      <div className="padreNav">
        <div
          className="logo"
          onClick={() => {
            history.push('/');
          }}
          aria-hidden="true"
        >
          <div className="logo circulo">{Logo}</div>
        </div>
        <BtnSuperior Btn={Productos} />

        <SubMenu ver={verSubmenu1} Btn={subProd} />

        <BtnSuperior Btn={Ventas} />

        <SubMenu ver={verSubmenu2} Btn={subVen} />

        <BtnSuperior Btn={Proveedores} />
        <SubMenu ver={verSubmenu3} Btn={subProv} />

        <BtnSuperior Btn={Administracion} />

        <SubMenu ver={verSubmenu4} Btn={subAdmin} />
      </div>
      <div className="padreNav">
        <BtnSuperior Btn={Configuracion} />
      </div>
    </nav>
  );
}

MenuLateral.propTypes = propTypes;
MenuLateral.defaultProps = defaultProps;

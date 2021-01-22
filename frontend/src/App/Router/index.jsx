import React from 'react';
// importando manejador de rutas
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout';
import Colores from '../Views/Colores';
import Empleados from '../Views/Empleados';
import Existencias from '../Views/Existencias';
import FromEmpleado from '../Views/Formularios/Empleado';
import ListaProductos from '../Views/ListaProductos';
import Marcas from '../Views/Marcas';
import Precentaciones from '../Views/Precentaciones';

export default function Rutas(props) {
  return (
    <Switch>
      <Route exact path="/frmColores" render={() => <Colores />} />
      <Route exact path="/frmMarcas" render={() => <Marcas />} />
      <Route exact path="/frmPrecentacones" render={() => <Precentaciones />} />

      <Route exact path="/frmEmpleado/Eliminar" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Crear" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Actualizar" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Eliminar" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Crear" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Actualizar" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Eliminar" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Crear" render={() => <FromEmpleado />} />
      <Route exact path="/frmEmpleado/Actualizar" render={() => <FromEmpleado />} />
      <Route exact path="/login" render={() => null} />
      <Route exact path="/about" render={() => <h1>Desarolaldo por : Juan Hernandez</h1>} />
      <Layout path="/">
        <>
          <Route
            component={({ match }) => (
              <>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <div className="ClogoHome">
                      <img
                        src={`${process.env.PUBLIC_URL}/Iconos/icons8-image.svg`}
                        alt=""
                        width="60px"
                      />
                    </div>
                  )}
                />
                <Route exact path="/Productos" render={() => <h1>Estamos en Productos</h1>} />
                <Route exact path="/Existencias" render={() => <h1>Estamos en Existencias</h1>} />
                <Route exact path="/Traslados" render={() => <h1>Estamos en Traslados</h1>} />
                <Route exact path="/Ventas" render={() => <h1>Estamos en Ventas</h1>} />
                <Route exact path="/Facturas" render={() => <h1>Estamos en Facturas</h1>} />
                <Route
                  exact
                  path="/VentasIndividuales"
                  render={() => <h1>Estamos en Ventas Individuales</h1>}
                />
                <Route
                  exact
                  path="/CambiosDevoluciones"
                  render={() => <h1>Estamos en Cambios o Devoluciones</h1>}
                />
                <Route exact path="/Proveedores" render={() => <h1>Estamos en Proveedores</h1>} />
                <Route
                  exact
                  path="/EjecutivosVentas"
                  render={() => <h1>Estamos en Lista Ejecutivos de Venta</h1>}
                />
                <Route exact path="/Pedidos" render={() => <h1>Estamos en Pedidos</h1>} />
                <Route
                  exact
                  path="/Administracion"
                  render={() => <h1>Estamos en Administración</h1>}
                />
                <Route exact path="/Reportes" render={() => <h1>Estamos en Reportes</h1>} />
                <Route exact path="/Empleados" render={() => <Empleados />} />
                <Route exact path="/Caja" render={() => <h1>Estamos en Cajas</h1>} />
                <Route exact path="/Respaldos" render={() => <h1>Estamos en Respaldos</h1>} />
                <Route
                  exact
                  path="/Configuracion"
                  render={() => <h1>Estamos en Configuración</h1>}
                />
              </>
            )}
          />
        </>
      </Layout>
    </Switch>
  );
}

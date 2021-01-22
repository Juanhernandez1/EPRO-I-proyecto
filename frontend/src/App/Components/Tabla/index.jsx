import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { instanceOf, objectOf, string } from 'prop-types';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import EncabezadoTabla from './EncabezadoTabla';
import { Creators } from '../../Core/Redux/Actions';

// * calidando props
// * accion: nombre o key del acctions
// * estado: estado de dispacher
// * paremetos para generar la tabla
const propTypes = {
  accion: string.isRequired,
  estado: string.isRequired,
  keyTable: string.isRequired,
  titulo: string.isRequired,
  toastData: objectOf(string).isRequired,
  confguracion: instanceOf(Array).isRequired,
  objRegTabla: string.isRequired
};

export default function Tabla(props) {
  const { accion, estado, confguracion, keyTable, toastData, titulo, objRegTabla } = props;

  // * estabo para filtro globar
  const [buscaGlobal, setsuscaGlobal] = useState();
  // * estado para fial seleccionada
  const [filaSelecionada, setFilaSelecionada] = useState();
  // * hooks de react-redux
  const dispatch = useDispatch();
  // * seleccionand del estado  enviado por props
  const { vista, objReg } = useSelector(state => state[estado]);

  // * refeencia para el toast
  const toast = React.useRef();
  // * bind de los datos del estado
  useEffect(() => {
    dispatch(Creators[accion]());
  }, [accion, dispatch]);

  // *  configuracion del toas
  const selecionFila = event => {
    toast.current.show({
      severity: 'info',
      summary: `${toastData.table} Seleccionado`,
      detail: `${toastData.vista}: ${event.data[toastData.campo]}`,
      life: 3000
    });
    dispatch(Creators[objRegTabla](event.data));
  };

  function formatCurrency(value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 4
    });
  }

  function priceBodyTemplate(rowData) {
    if (rowData.Costo) {
      return formatCurrency(rowData.Costo);
    }
    if (rowData.PrecioVenta) {
      return formatCurrency(rowData.PrecioVenta);
    }
    return formatCurrency(rowData.PrecioVentam);
  }

  function ivaBodyTemplate(rowData) {
    if (rowData.PoseeIva) {
      return 'Si';
    }
    return 'No';
  }

  // * componente para el encabezado
  const header = <EncabezadoTabla setsuscaGlobal={setsuscaGlobal} titulo={`${titulo}`} />;

  return (
    <>
      <Toast ref={toast} style={{ top: '40px' }} />
      <DataTable
        value={vista}
        scrollable
        scrollHeight="76vh"
        style={{ height: '-webkit-fill-available', width: '-webkit-fill-available' }}
        selection={filaSelecionada}
        onSelectionChange={e => setFilaSelecionada(e.value)}
        selectionMode="single"
        dataKey={keyTable}
        onRowSelect={e => selecionFila(e)}
        header={header}
        globalFilter={buscaGlobal}
        emptyMessage="Nose Encontraron Registros."
      >
        {
          //* generando tabla a parti de la configuración enviada por porps
          confguracion.map((item, index) => {
            const noMargen = confguracion.length - 1;

            if (index !== noMargen) {
              if (
                item.campo === 'Costo' ||
                item.campo === 'PrecioVenta' ||
                item.campo === 'PrecioVentam'
              ) {
                return (
                  <Column
                    className="fuente"
                    field={item.campo}
                    header={item.vista}
                    style={{
                      ...item.estilo,
                      padding: '0.5rem 0.5rem',
                      borderRight: '1px ridge gray'
                    }}
                    body={e => priceBodyTemplate(e)}
                    headerStyle={{
                      ...item.estilo,
                      padding: '0.8rem 0.8rem',
                      borderRight: '1px ridge gray',
                      textAlign: 'center'
                    }}
                    key={item.campo}
                  />
                );
              }
              if (item.campo === 'PoseeIva') {
                return (
                  <Column
                    className="fuente"
                    field={item.campo}
                    header={item.vista}
                    style={{
                      ...item.estilo,
                      padding: '0.5rem 0.5rem',
                      borderRight: '1px ridge gray'
                    }}
                    body={e => ivaBodyTemplate(e)}
                    headerStyle={{
                      ...item.estilo,
                      padding: '0.8rem 0.8rem',
                      borderRight: '1px ridge gray',
                      textAlign: 'center'
                    }}
                    key={item.campo}
                  />
                );
              }
              return (
                <Column
                  className="fuente"
                  field={item.campo}
                  header={item.vista}
                  style={{
                    ...item.estilo,
                    padding: '0.5rem 0.5rem',
                    borderRight: '1px ridge gray'
                  }}
                  headerStyle={{
                    ...item.estilo,
                    padding: '0.8rem 0.8rem',
                    borderRight: '1px ridge gray',
                    textAlign: 'center'
                  }}
                  key={item.campo}
                />
              );
            }
            return (
              <Column
                className="fuente"
                field={item.campo}
                header={item.vista}
                style={{ ...item.estilo, padding: '0.5rem 0.5rem' }}
                headerStyle={{
                  ...item.estilo,
                  padding: '0.8rem 0.8rem',
                  textAlign: 'center'
                }}
                key={item.campo}
              />
            );
          })
        }
      </DataTable>
    </>
  );
}

Tabla.propTypes = propTypes;

import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
// import { useDispatch, useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import EncabezadoTabla from '../../Components/Tabla/EncabezadoTabla';
import { Creators } from '../../Core/Redux/Actions';
import MenuCRUD from '../../Components/MenuCRUD';
import Boton from '../../Components/Boton';

export default function Colores() {
  // * estabo para filtro globar
  const [buscaGlobal, setsuscaGlobal] = useState();

  const [ColoresEstado, setMarca] = useState({
    IdColor: '',
    Color: ''
  });

  const [TextoBtn, setTextoBtn] = useState('Guardar');

  // * estado para fial seleccionada
  const [filaSelecionada, setFilaSelecionada] = useState();
  // * hooks de react-redux
  // const dispatch = useDispatch();
  // * seleccionand del estado  enviado por props
  // const { datos } = useSelector(state => state.Colores);

  // * bind de los datos del estado
  /*  useEffect(() => {
   // dispatch(Creators.PeticionGetAPIColores());
  }, [dispatch]);
*/
  // * refeencia para el toast
  const toast = React.useRef();

  // *  configuracion del toas
  const selecionFila = event => {
    toast.current.show({
      severity: 'info',
      summary: `Color Seleccionado`,
      detail: `Color: ${event.data.Color}`,
      life: 1000
    });

    if (TextoBtn !== 'Guardar') setMarca(event.data);
  };

  // * componente para el encabezado
  const header = <EncabezadoTabla setsuscaGlobal={setsuscaGlobal} titulo="Colores" />;

  const IconoCancelar = `${process.env.PUBLIC_URL}/Iconos/icons8-close-window.svg`;
  const IconoAceptar =
    TextoBtn === 'Eliminar'
      ? `${process.env.PUBLIC_URL}/Iconos/icons8-trash.svg`
      : `${process.env.PUBLIC_URL}/Iconos/icons8-save.svg`;
  // * bind de los datos del estado

  const handleSubmit = e => {
    e.preventDefault();
    const carga = { ...ColoresEstado };
    console.log('Emplead: ', carga);
  };

  const handleReset = e => {
    e.preventDefault();
    e.target.reset();
    setMarca({
      IdColor: '',
      Color: ''
    });
  };

  return (
    <div className="contenedor base ajusteFormulario">
      <div style={{ width: '45%' }}>
        <MenuCRUD
          funTextIngresar={() => {
            setTextoBtn('Guardar');
            setMarca({
              IdColor: '',
              Color: ''
            });
          }}
          funTextActualizar={() => {
            setTextoBtn('Actualizar');
          }}
          funTextEliminar={() => {
            setTextoBtn('Eliminar');
          }}
        />
        <div>
          <form id="frmColores" onSubmit={e => handleSubmit(e)} onReset={e => handleReset(e)}>
            <div className="contenedor formulario AjusFrm">
              <span className="p-float-label">
                <InputText
                  id="IdColor"
                  name="IdColor"
                  value={ColoresEstado.IdColor}
                  onChange={e => setMarca({ ...ColoresEstado, [e.target.name]: e.target.value })}
                  required
                />
                <label htmlFor="IdColor">ID</label>
              </span>

              <span className="p-float-label">
                <InputText
                  id="Marca"
                  name="Marca"
                  value={ColoresEstado.Marca}
                  onChange={e => setMarca({ ...ColoresEstado, [e.target.name]: e.target.value })}
                  required
                />
                <label htmlFor="Marca">Nombre</label>
              </span>
            </div>
            <div className="contenedor formulario" style={{ marginRight: '2px !important' }}>
              <span className="p-float-label ajusteSpam">
                <div className="ajusteBtnFrm">
                  <Boton
                    idProp="frm_Colores_Cancelar"
                    type="reset"
                    style={{ backgroundColor: '#F44336' }}
                    Texto="Cancelar"
                    Icono={<img src={IconoCancelar} alt="" width="30px" />}
                  />
                </div>

                <div className="ajusteBtnFrm">
                  <Boton
                    idProp="frm_Colores_Aceptar"
                    type="submit"
                    style={{ backgroundColor: '#27ae60' }}
                    reset
                    Texto={TextoBtn}
                    Icono={<img src={IconoAceptar} alt="" width="30px" />}
                  />
                </div>
              </span>
            </div>
          </form>
        </div>
      </div>
      <div style={{ width: '55%' }}>
        <Toast ref={toast} style={{ top: '40px' }} />
        <DataTable
          value={[]}
          scrollable
          scrollHeight="76vh"
          style={{ height: '-webkit-fill-available', width: '-webkit-fill-available' }}
          selection={filaSelecionada}
          onSelectionChange={e => setFilaSelecionada(e.value)}
          selectionMode="single"
          dataKey="IdMarca"
          onRowSelect={e => selecionFila(e)}
          header={header}
          globalFilter={buscaGlobal}
          emptyMessage="Nose Encontraron Registros."
        >
          <Column
            className="fuente"
            field="IdColor"
            header="ID"
            style={{
              padding: '0.5rem 0.5rem',
              borderRight: '1px ridge gray'
            }}
            headerStyle={{
              padding: '0.8rem 0.8rem',
              borderRight: '1px ridge gray',
              textAlign: 'center'
            }}
          />

          <Column
            className="fuente"
            field="Color"
            header="Color"
            style={{ padding: '0.5rem 0.5rem' }}
            headerStyle={{
              padding: '0.8rem 0.8rem',
              textAlign: 'center'
            }}
          />
        </DataTable>
      </div>
    </div>
  );
}

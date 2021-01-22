import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
// import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import EncabezadoTabla from '../../Components/Tabla/EncabezadoTabla';
import { Creators } from '../../Core/Redux/Actions';
import MenuCRUD from '../../Components/MenuCRUD';
import Boton from '../../Components/Boton';

export default function Precentaciones() {
  // * estabo para filtro globar
  const [buscaGlobal, setsuscaGlobal] = useState();

  const [Precentacion, setPrecentacion] = useState({
    IdPresentacion: '',
    Descripcion: '',
    Cantidad: undefined,
    Tipo: ''
  });

  const [TextoBtn, setTextoBtn] = useState('Guardar');

  // * estado para fial seleccionada
  const [filaSelecionada, setFilaSelecionada] = useState();
  // * hooks de react-redux
  // const dispatch = useDispatch();
  // * seleccionand del estado  enviado por props
  // const { datos } = useSelector(state => state.Precentaciones);

  // * bind de los datos del estado
  /* useEffect(() => {
    dispatch(Creators.PeticionGetAPIPrecentaciones());
  }, [dispatch]); */

  // * refeencia para el toast
  const toast = React.useRef();

  // *  configuracion del toas
  const selecionFila = event => {
    toast.current.show({
      severity: 'info',
      summary: `Descripcion Seleccionada`,
      detail: `Descripcion: ${event.data.Descripcion}`,
      life: 1000
    });

    if (TextoBtn !== 'Guardar') setPrecentacion(event.data);
  };

  const Tipolist = [
    { Tipo: 'Venta', valor: 'V' },
    { Tipo: 'Compra', valor: 'C' }
  ];

  // * componente para el encabezado
  const header = <EncabezadoTabla setsuscaGlobal={setsuscaGlobal} titulo="Precentaciones" />;

  const IconoCancelar = `${process.env.PUBLIC_URL}/Iconos/icons8-close-window.svg`;
  const IconoAceptar =
    TextoBtn === 'Eliminar'
      ? `${process.env.PUBLIC_URL}/Iconos/icons8-trash.svg`
      : `${process.env.PUBLIC_URL}/Iconos/icons8-save.svg`;
  // * bind de los datos del estado

  const handleSubmit = e => {
    e.preventDefault();
    const carga = { ...Precentacion };
    console.log('Emplead: ', carga);
  };

  const handleReset = e => {
    e.preventDefault();
    e.target.reset();
    setPrecentacion({
      IdPresentacion: '',
      Descripcion: '',
      Cantidad: undefined,
      Tipo: ''
    });
  };

  function TipoBodyTemplate(rowData) {
    if (rowData.Tipo === 'V') {
      return 'Venta';
    }
    return 'Compra';
  }

  return (
    <div className="contenedor base ajusteFormulario">
      <div style={{ width: '45%' }}>
        <MenuCRUD
          funTextIngresar={() => {
            setTextoBtn('Guardar');
            setPrecentacion({
              IdPresentacion: '',
              Descripcion: '',
              Cantidad: undefined,
              Tipo: ''
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
          <form
            id="frmPrecentaciones"
            onSubmit={e => handleSubmit(e)}
            onReset={e => handleReset(e)}
          >
            <div className="contenedor formulario AjusFrm">
              <span className="p-float-label">
                <InputText
                  id="IdPresentacion"
                  name="IdPresentacion"
                  value={Precentacion.IdPresentacion}
                  onChange={e =>
                    setPrecentacion({ ...Precentacion, [e.target.name]: e.target.value })
                  }
                  required
                />
                <label htmlFor="IdPresentacion">ID</label>
              </span>

              <span className="p-float-label">
                <InputText
                  id="Descripcion"
                  name="Descripcion"
                  value={Precentacion.Descripcion}
                  onChange={e =>
                    setPrecentacion({ ...Precentacion, [e.target.name]: e.target.value })
                  }
                  required
                />
                <label htmlFor="Descripcion">Nombre</label>
              </span>

              <span className="p-float-label">
                <InputNumber
                  id="Cantidad"
                  name="Cantidad"
                  value={Precentacion.Cantidad}
                  onValueChange={e =>
                    setPrecentacion({ ...Precentacion, [e.target.name]: e.target.value })
                  }
                  required
                />
                <label htmlFor="Cantidad">Cantidad</label>
              </span>

              <span className="p-float-label">
                <Dropdown
                  id="Tipo"
                  name="Tipo"
                  value={Precentacion.Tipo}
                  options={Tipolist}
                  optionLabel="Tipo"
                  optionValue="valor"
                  onChange={e =>
                    setPrecentacion({ ...Precentacion, [e.target.name]: e.target.value })
                  }
                  required
                />
                <label htmlFor="Sexo">Sexo</label>
              </span>
            </div>
            <div className="contenedor formulario" style={{ marginRight: '2px !important' }}>
              <span className="p-float-label ajusteSpam">
                <div className="ajusteBtnFrm">
                  <Boton
                    idProp="frm_Precentaciones_Cancelar"
                    type="reset"
                    style={{ backgroundColor: '#F44336' }}
                    Texto="Cancelar"
                    Icono={<img src={IconoCancelar} alt="" width="30px" />}
                  />
                </div>

                <div className="ajusteBtnFrm">
                  <Boton
                    idProp="frm_Precentaciones_Aceptar"
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
          dataKey="IdPresentacion"
          onRowSelect={e => selecionFila(e)}
          header={header}
          globalFilter={buscaGlobal}
          emptyMessage="Nose Encontraron Registros."
        >
          <Column
            className="fuente"
            field="IdPresentacion"
            header="ID"
            style={{
              width: '60px',
              textAlign: 'center',
              padding: '0.5rem 0.5rem',
              borderRight: '1px ridge gray'
            }}
            headerStyle={{
              width: '60px',
              padding: '0.8rem 0.8rem',
              borderRight: '1px ridge gray',
              textAlign: 'center'
            }}
          />

          <Column
            className="fuente"
            field="Descripcion"
            header="Descripcion"
            style={{
              width: '100px',
              padding: '0.5rem 0.5rem',
              borderRight: '1px ridge gray'
            }}
            headerStyle={{
              width: '180px',
              padding: '0.8rem 0.8rem',
              borderRight: '1px ridge gray',
              textAlign: 'center'
            }}
          />

          <Column
            className="fuente"
            field="Cantidad"
            header="Cantidad"
            style={{
              width: '100px',
              textAlign: 'center',
              padding: '0.5rem 0.5rem',
              borderRight: '1px ridge gray'
            }}
            headerStyle={{
              width: '100px',
              padding: '0.8rem 0.8rem',
              borderRight: '1px ridge gray',
              textAlign: 'center'
            }}
          />
          <Column
            className="fuente"
            field="Tipo"
            header="Tipo"
            style={{ width: '100px', textAlign: 'center', padding: '0.5rem 0.5rem' }}
            body={e => TipoBodyTemplate(e)}
            headerStyle={{
              width: '100px',
              padding: '0.8rem 0.8rem',
              textAlign: 'center'
            }}
          />
        </DataTable>
      </div>
    </div>
  );
}

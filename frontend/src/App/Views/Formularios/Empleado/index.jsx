import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputMask } from 'primereact/inputmask';
import { AutoComplete } from 'primereact/autocomplete';
import Boton from '../../../Components/Boton';
import { Creators } from '../../../Core/Redux/Actions';

const propTypes = {};

const defaultProps = {};

export default function FromEmpleado(props) {
  // * hooks de react-redux
  const dispatch = useDispatch();
  // * seleccionand del estado  enviado por props
  const { datos } = useSelector(state => state.cargos);
  const { objReg } = useSelector(state => state.empleados);

  const [TextoBtn, setTextoBtn] = useState('');

  const [Empleado, setEmpleado] = useState({
    IdEmpleado: '',
    Nombre: '',
    Apellido: '',
    Sexo: '',
    Telefono: '',
    IdCargo: 0,
    Estado: ''
  });

  const [Filtro, setFiltro] = useState();

  const IconoCancelar = `${process.env.PUBLIC_URL}/Iconos/icons8-close-window.svg`;
  const IconoAceptar =
    window.location.hash === '#/frmEmpleado/Eliminar'
      ? `${process.env.PUBLIC_URL}/Iconos/icons8-trash.svg`
      : `${process.env.PUBLIC_URL}/Iconos/icons8-save.svg`;

  // * bind de los datos del estado
  useEffect(() => {
    if (window.location.hash === '#/frmEmpleado/Crear') {
      setTextoBtn('Guardar');
    } else if (window.location.hash === '#/frmEmpleado/Actualizar') {
      setTextoBtn('Guardar');
    } else if (window.location.hash === '#/frmEmpleado/Eliminar') {
      setTextoBtn('Eliminar');
    }

    if (objReg.IdEmpleado !== undefined && window.location.hash !== '#/frmEmpleado/Crear') {
      dispatch(Creators.SagaGetApiCargosTodos());
      const cargoElemente = objReg.Cargo;
      delete objReg.Cargo;
      setEmpleado({ ...objReg, IdCargo: cargoElemente });
    }
  }, [dispatch, objReg, setTextoBtn]);

  const sexolist = [
    { sexo: 'Hombre', valor: 'H' },
    { sexo: 'Mujer', valor: 'M' }
  ];

  const estadolist = [{ estado: 'Activo' }, { estado: 'Despedido' }];

  const Buscar = event => {
    setTimeout(() => {
      let filteredCargo;
      if (!event.query.trim().length) {
        filteredCargo = [...datos];
      } else {
        filteredCargo = datos.filter(country => {
          return country.Cargo.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }
      setFiltro(filteredCargo);
    }, 250);
  };

  const itemTemplate = item => {
    return (
      <div className="country-item">
        <div>{item.Cargo}</div>
      </div>
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const carga = { ...Empleado, IdCargo: Empleado.IdCargo.IdCargo };
  };

  const handleReset = e => {
    e.preventDefault();
    e.target.reset();
    setEmpleado({
      IdEmpleado: '',
      Nombre: '',
      Apellido: '',
      Sexo: '',
      Telefono: '',
      IdCargo: 0,
      Estado: ''
    });
  };

  return (
    <div className="contenedor base">
      <form id="frmEmpleados" onSubmit={e => handleSubmit(e)} onReset={e => handleReset(e)}>
        <div className="contenedor formulario" style={{ marginTop: '15px' }}>
          <span className="p-float-label">
            <InputText
              id="IdEmpleado"
              name="IdEmpleado"
              value={Empleado.IdEmpleado}
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="IdEmpleado">ID</label>
          </span>

          <span className="p-float-label">
            <InputText
              id="Nombre"
              name="Nombre"
              value={Empleado.Nombre}
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="Nombre">Nombre</label>
          </span>

          <span className="p-float-label">
            <InputText
              id="Apellido"
              name="Apellido"
              value={Empleado.Apellido}
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="Apellido">Apellido</label>
          </span>
        </div>
        <div className="contenedor formulario">
          <span className="p-float-label">
            <Dropdown
              id="Sexo"
              name="Sexo"
              value={Empleado.Sexo}
              options={sexolist}
              optionLabel="sexo"
              optionValue="valor"
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="Sexo">Sexo</label>
          </span>

          <span className="p-float-label">
            <InputMask
              id="Telefono"
              name="Telefono"
              mask="9999-9999"
              value={Empleado.Telefono}
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="Telefono">Telefono</label>
          </span>

          <span className="p-float-label">
            <AutoComplete
              id="IdCargo"
              name="IdCargo"
              value={Empleado.IdCargo}
              suggestions={Filtro}
              completeMethod={Buscar}
              field="Cargo"
              dropdown
              itemTemplate={itemTemplate}
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
              onFocus={() => {
                dispatch(Creators.SagaGetApiCargosTodos());
              }}
            />

            <label htmlFor="IdCargo">Cargo</label>
          </span>
        </div>
        <div className="contenedor formulario" style={{ marginRight: '2px !important' }}>
          <span className="p-float-label">
            <Dropdown
              id="Estado"
              name="Estado"
              value={Empleado.Estado}
              options={estadolist}
              optionLabel="estado"
              optionValue="estado"
              onChange={e => setEmpleado({ ...Empleado, [e.target.name]: e.target.value })}
            />
            <label htmlFor="Estado">Estado</label>
          </span>

          <span className="p-float-label ajusteSpam">
            <div className="ajusteBtnFrm">
              <Boton
                idProp="frm_Empleados_Cancelar"
                type="reset"
                style={{ backgroundColor: '#F44336' }}
                Texto="Cancelar"
                Icono={<img src={IconoCancelar} alt="" width="30px" />}
              />
            </div>

            <div className="ajusteBtnFrm">
              <Boton
                idProp="frm_Empleados_Aceptar"
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
  );
}

FromEmpleado.propTypes = propTypes;
FromEmpleado.defaultProps = defaultProps;

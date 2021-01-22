import React from 'react';
import Tabla from '../../Components/Tabla';

const confguracion = [
  {
    campo: 'IdEmpleado',
    vista: 'ID',
    estilo: { width: '100px', textAlign: 'left' }
  },
  {
    campo: 'Nombre',
    vista: 'Nombre',
    estilo: { width: '100px', textAlign: 'left' }
  },

  {
    campo: 'Apellido',
    vista: 'Apellido',
    estilo: { width: '100px', textAlign: 'left' }
  },
  {
    campo: 'Sexo',
    vista: 'Sexo',
    estilo: { width: '100px', textAlign: 'center' }
  },

  {
    campo: 'Telefono',
    vista: 'Teléfono',
    estilo: { width: '100px', textAlign: 'right' }
  },
  {
    campo: 'Cargo',
    vista: 'Cargo',
    estilo: { width: '100px', textAlign: 'center' }
  }
];

const toadt = { table: 'Empleado', campo: 'Nombre', vista: 'Nombre' };

export default function Empleados(props) {
  return (
    <Tabla
      titulo="Empleados"
      confguracion={confguracion}
      estado="empleados"
      accion="SagaGetApiEmpleadosVista"
      toastData={toadt}
      keyTable="IdEmpleado"
      objRegTabla="ObjEmpleadosSaga"
    />
  );
}

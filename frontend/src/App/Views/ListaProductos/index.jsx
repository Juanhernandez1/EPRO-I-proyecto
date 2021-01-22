import React from 'react';
import Tabla from '../../Components/Tabla';

const confguracion = [
  {
    campo: 'IdProducto',
    vista: 'ID',
    estilo: { width: '100px', textAlign: 'left' }
  },
  {
    campo: 'Marca',
    vista: 'Marca',
    estilo: { width: '100px', textAlign: 'left' }
  },

  {
    campo: 'Nombre',
    vista: 'Nombre',
    estilo: { width: '100px', textAlign: 'left' }
  },
  {
    campo: 'Costo',
    vista: 'Costo',
    estilo: { width: '100px', textAlign: 'right' }
  },

  {
    campo: 'ExistenciaTotal',
    vista: 'Existencia',
    estilo: { width: '100px', textAlign: 'right' }
  }
];

const toadt = { table: 'Producto', campo: 'Nombre', vista: 'Nombre' };

export default function ListaProductos(props) {
  return (
    <Tabla
      titulo="Lista de Productos"
      confguracion={confguracion}
      estado="ListaProductos"
      accion="PeticionGetAPIListaProductosVista"
      toastData={toadt}
      keyTable="IdProducto"
    />
  );
}

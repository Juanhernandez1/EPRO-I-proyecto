import React from 'react';
import Tabla from '../../Components/Tabla';

const confguracion = [
  {
    campo: 'CodBarras',
    vista: 'Cod. Barras',
    estilo: { width: '110px', textAlign: 'left' }
  },
  {
    campo: 'IdProducto',
    vista: 'ID',
    estilo: { width: '100px', textAlign: 'left' }
  },

  {
    campo: 'Nombre',
    vista: 'Nombre',
    estilo: { width: '200px', textAlign: 'left' }
  },
  {
    campo: 'Marca',
    vista: 'Marca',
    estilo: { width: '100px', textAlign: 'center' }
  },
  {
    campo: 'Color',
    vista: 'Color',
    estilo: { width: '100px', textAlign: 'center' }
  },
  {
    campo: 'Descripcion',
    vista: 'Precentacion',
    estilo: { width: '150px', textAlign: 'center' }
  },
  {
    campo: 'Existencia',
    vista: 'Existencia',
    estilo: { width: '110px', textAlign: 'right' }
  },
  {
    campo: 'PrecioVenta',
    vista: 'Precio de Venta',
    estilo: { width: '150px', textAlign: 'right' }
  },
  {
    campo: 'PrecioVentam',
    vista: 'Precio por Mayor',
    estilo: { width: '150px', textAlign: 'right' }
  },
  {
    campo: 'PoseeIva',
    vista: 'IVA',
    estilo: { width: '100px', textAlign: 'center' }
  },
  {
    campo: 'Direccion',
    vista: 'Direccion',
    estilo: { width: '200px', textAlign: 'right' }
  }
];

const toadt = { table: 'Producto', campo: 'Nombre', vista: 'Nombre' };

export default function Existencias(props) {
  return (
    <Tabla
      titulo="Existencia de Productos"
      confguracion={confguracion}
      estado="ExistenciaProductos"
      accion="PeticionGetAPIExistenciaProductosVista"
      toastData={toadt}
      keyTable="CodBarras"
    />
  );
}

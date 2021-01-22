import React from 'react';
import { InputText } from 'primereact/inputtext';
import { func, string } from 'prop-types';

const propTypes = { setsuscaGlobal: func.isRequired, titulo: string.isRequired };

export default function EncabezadoTabla(props) {
  const { setsuscaGlobal, titulo } = props;
  return (
    <div
      className="table-header"
      style={{
        padding: '0.5rem 0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between '
      }}
    >
      {titulo}
      <span className="p-input-icon-left">
        <img
          src={`${process.env.PUBLIC_URL}/Iconos/icons8-search-more.svg`}
          alt=""
          style={{
            width: '22px',
            top: '5px',
            left: '30px',
            position: 'relative'
          }}
          width="10px"
        />

        <InputText
          type="search"
          onInput={e => {
            setsuscaGlobal(e.target.value);
          }}
          placeholder="Busca ..."
        />
      </span>
    </div>
  );
}

EncabezadoTabla.propTypes = propTypes;

const axios = require('axios');
const fs = require('fs');
const path = require('path');
// * se lee un archivo json del sistema de archivos
const rawdata = fs.readFileSync(path.resolve('./public/configuracion.json'));

const configuraciones = JSON.parse(rawdata);
console.log('configuraciones: ', configuraciones);
// * configuración
// * puerto de escuha de la api
// * host
// * api = version
const { puerto, host, api } = configuraciones;

// * crea un objeto con peticiones a todas las rutas existente en la api
function API(carga) {
  const { modelo, id, dato, objCarga } = carga;
  const obj = JSON.stringify(objCarga);
  const conf = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return {
    GET: {
      todos: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/todos`;
        return axios.get(URL).then(response => {
          return response.data;
        });
      },
      buscarPorPk: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/buscarPorPk/${id}`;
        return axios.get(URL).then(response => {
          return response.data;
        });
      },
      buscarUnoPorLike: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/buscarUnoPorLike/${dato}`;
        return axios.get(URL).then(response => {
          return response.data;
        });
      },
      buscarMuchosPorLike: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/buscarMuchosPorLike/${dato}`;
        return axios.get(URL).then(response => {
          return response.data;
        });
      },
      vista: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/vista`;
        return axios.get(URL).then(response => {
          return response.data;
        });
      }
    },
    POST: {
      ingresar: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/ingresar`;
        return axios.post(URL, obj, conf).then(response => {
          return response.data;
        });
      }
    },
    PUT: {
      actualizar: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}/actualizar`;
        return axios.put(URL, obj, conf).then(response => {
          return response.data;
        });
      }
    },
    DELETE: {
      eliminar: () => {
        const URL = `http://${host}:${puerto}/API/${api}/${modelo}//eliminar/${id}`;
        return axios.delete(URL);
      }
    }
  };
}

module.exports = API;

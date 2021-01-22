import React from 'react';
import { withRouter } from 'react-router-dom';
import Rutas from './Router';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './App.css';

import 'normalize.css';

function App() {
  return <Rutas />;
}

export default withRouter(App);

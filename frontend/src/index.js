import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Appcontexto } from './App/Core/Context';

/* ************************** importando redux para estados globales ******************************* */

const { forwardToMain, replayActionRenderer, getInitialStateRenderer } = require('electron-redux');
const { createStore, applyMiddleware, combineReducers } = require('redux');

const createSagaMiddleware = require('redux-saga').default;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = require('./App/Core/Redux/Reducers');
const rootSaga = require('./App/Core/Redux/Sagas');

const todoApp = combineReducers(rootReducer);

const initialState = getInitialStateRenderer();

const store = createStore(
  todoApp,
  initialState,
  applyMiddleware(
    forwardToMain, // IMPORTANT! This goes first
    sagaMiddleware
  )
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  console.log(store.getState());
});

replayActionRenderer(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Appcontexto>
        <App />
      </Appcontexto>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

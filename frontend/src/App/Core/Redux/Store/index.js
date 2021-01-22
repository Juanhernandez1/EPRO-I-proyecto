import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const rootReducer = require('../Reducers');
const rootSaga = require('../Sagas');

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;

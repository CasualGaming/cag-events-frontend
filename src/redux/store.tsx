import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware, Options } from 'redux-observable';
import epics from './epics';
import reducers from './reducers';

export const epicMiddleware = createEpicMiddleware(epics as Options);

function configureStore(initialState?: object) {
  const middlewares = [epicMiddleware, logger];
  const mw = applyMiddleware(...middlewares);

  return createStore(reducers, initialState!, mw);
}

const store = configureStore()

export default store;

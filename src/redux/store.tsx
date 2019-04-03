import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import * as immutablestate from 'redux-immutable-state-invariant';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import reducers from './reducers';

function configureStore(initialState?: object) {
	const middlewares =
		process.env.NODE_ENV !== 'production'
			? [promiseMiddleware, thunk, logger, immutablestate.default()]
			: [promiseMiddleware, thunk];

	const mw = applyMiddleware(...middlewares);

	return createStore(reducers, initialState!, mw);
}

const store = configureStore();

export default store;

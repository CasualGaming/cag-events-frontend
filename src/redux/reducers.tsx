import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { AuthState, AuthReducer } from './flux/auth';

export interface StoreState {
	auth: AuthState;
}

const reducers = combineReducers({
	auth: AuthReducer,
	router: routerReducer
});

export default reducers;

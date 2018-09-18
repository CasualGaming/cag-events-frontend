import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  router: routerReducer,

})

export default reducers;

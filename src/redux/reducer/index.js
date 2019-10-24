import {combineReducers} from 'redux';
import ItemReducer from './ItemReducer';
import ResultReducer from './ResultReducer';

export default combineReducers({
  ItemReducer,
  ResultReducer,
});

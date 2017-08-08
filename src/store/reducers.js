import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import Header from './Header/reducer';
import UI from './UI/reducer';

export default combineReducers({
  routing: routerReducer,
  UI,
  Header,
});

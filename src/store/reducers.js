import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import Header from './Header/reducer';
import Sider from './Sider/reducer';
import UI from './UI/reducer';

export default combineReducers({
  routing: routerReducer,
  Header,
  Sider,
  UI,
});

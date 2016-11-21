import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import tweeterView from './tweeterView';
import tweet from './tweet';

const rootReducer = combineReducers({
  tweeterView,
  tweet,
  routing
});

export default rootReducer;

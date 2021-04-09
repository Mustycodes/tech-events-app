import {combineReducers} from 'redux';
import userReducer from './user/reducer';
import eventsReducer from './events/reducer'

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer
});

export default rootReducer;
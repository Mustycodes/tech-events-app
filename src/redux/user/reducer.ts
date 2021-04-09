import { initialState } from './initialState';
import { LOGOUT_USER, LOGIN_USER } from './constants';
import { Reducer } from 'redux';
const userReducer:Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      if (action.payload.password === "testing") {
        return {isAuthenticated:true, name: action.payload.username};
      }
      return state;
    case LOGOUT_USER:
      return {isAuthenticated: false, name: ''};
    default:
    return state;
  }
}

export default userReducer;
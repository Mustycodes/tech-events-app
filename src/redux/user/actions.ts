import * as types from './constants';

interface User {
  username: string;
  password: string | number;
}
export const loginUser = (user:User) => ({type: types.LOGIN_USER, payload: user})
export const logOutUser = () => ({type: types.LOGOUT_USER})

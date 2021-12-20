import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './types';

// Register user

export const register = (payload) => async (dispatch) => {
  try {
    localStorage.setItem(payload.email, JSON.stringify(payload));
    dispatch(setAlert('register success'));

    dispatch({
      type: REGISTER_SUCCESS,
      payload,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert));
    }
    dispatch({
      type: REGISTER_FAIL,
      payload,
    });
  }
};

export const login = (payload, history) => (dispatch) => {
  let LoginData = localStorage.getItem(payload?.email);
  console.log(LoginData);
  console.log(payload);
  LoginData = JSON.parse(LoginData);

  if (
    payload?.email === LoginData?.email &&
    payload?.password === LoginData?.password
  ) {
    // dispatch(setAlert('Login success'));
    dispatch({
      type: LOGIN_SUCCESS,
      payload,
    });
    history.push('/dashboard');
  } else {
    dispatch(setAlert('Login Fail Psw or email not match'));
    dispatch({
      type: LOGIN_FAIL,
      payload,
    });
  }
};

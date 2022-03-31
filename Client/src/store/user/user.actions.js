import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REGISTER_STARTS,
  LOGIN_STARTS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
} from './types';
import axios from 'axios';

// REGISTER AN USER
export const register = (name, email, password, passwordConfirm) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password, passwordConfirm });
  console.log('REQ BODY', body);
  try {
    dispatch({ type: REGISTER_STARTS });
    const res = await axios.post('http://localhost:4500/api/v1/user/signup', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response,
    });
  }
};

// LOGIN AN USER
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    dispatch({ type: LOGIN_STARTS });
    const res = await axios.post('http://localhost:4500/api/v1/user/signin', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

// LOGOUT
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

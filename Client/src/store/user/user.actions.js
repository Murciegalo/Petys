import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SET_LOADING_FALSE,
} from './types';
import axios from 'axios';

// REGISTER AN USER
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ name, email, password });
    try {
      const res = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data.token,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error,
      });
    }
  };

// LOGIN AN USER
export const login = (email, password) => async (dispatch) => {
  console.log('running login');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('http://localhost:4500/api/v1/user/signin', body, config);
    console.log(res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
    setTimeout(
      () =>
        dispatch({
          type: SET_LOADING_FALSE,
        }),
      1000,
    );
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

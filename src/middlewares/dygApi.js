import axios from 'axios';

import {
  LOGIN, LOGOUT, saveUser, REGISTER
} from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'https://api.dustyourgames.com/api/',
});

const dygApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { user: { email, password } } = store.getState();
      const username = email;
      axiosInstance
        .post(
          'login_check',
          {
            username,
            password,
          },
        )
        .then((response) => {
          const { data: user } = response;
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
          console.log(user);
          store.dispatch(saveUser(user));
        })
        .catch(() => {
          console.log('oups...');
        });
      store.dispatch(saveUser({ logged: true }));
      next(action);
      break;
    }
    case REGISTER: {
      const { user: { email, password } } = store.getState();

      axiosInstance
        .post(
          'register',
          {
            email,
            password,
          },
        )
        .then((response) => {
          console.log(response);
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    }
    case LOGOUT:
      axiosInstance.defaults.headers.common.Authorization = null;
      next(action);
      break;
    default:
      next(action);
  }
};

export default dygApiMiddleWare;

import axios from 'axios';

import {
  LOGIN, LOGOUT, saveUser,
} from '../actions/user';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/',
});

const dygApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // const { user: { email, password } } = store.getState();

      // axiosInstance
      //   .post(
      //     'login',
      //     {
      //       email,
      //       password,
      //     },
      //   )
      //   .then((response) => {
      //     const { data: user } = response;
      //     axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
      //     console.log(user);
      //     store.dispatch(saveUser(user));
      //   })
      //   .catch(() => {
      //     console.log('oups...');
      //   });
      store.dispatch(saveUser({ logged: true }));
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

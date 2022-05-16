import axios from 'axios';

import {
  LOGIN, LOGOUT, saveUser, REGISTER
} from '../actions/user';
import { toggleLoading, toggleLoginForm } from '../actions/home'
import { saveUserAccount } from '@/actions/account';

const axiosInstance = axios.create({
  baseURL: 'https://api.dustyourgames.com/api/',
});


const dygApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case REGISTER: {
      store.dispatch(toggleLoading())
      const { home: { pseudo_name, birthday, email, password } } = store.getState();
      const year_of_birth = parseInt(birthday.slice(0, 4))
      axiosInstance
        .post(
          'register',
          {
            email,
            password,
            pseudo_name,
            year_of_birth
          },
        )
        .then((response) => {
          store.dispatch(toggleLoading())
          store.dispatch(toggleLoginForm(true));
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    }
    case LOGIN: {
      const { home: { email, password } } = store.getState();
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
          console.log(response);
          const user = response.data.user;
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
          store.dispatch(saveUser(user));
          store.dispatch(saveUserAccount(user));
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

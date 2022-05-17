import axios from 'axios';
// Actions
import {
  LOGIN, LOGOUT, saveUser, REGISTER, FETCH_USER
} from '../actions/user';
import { closeAlert, sendAlert, toggleLoading } from '../actions/app'
import { toggleLoginForm } from '../actions/home'
import { saveUserAccount } from '@/actions/account';
// Utilities
import { setWithExpiry, getWithExpiry } from '@/utils/localStorage';

const axiosInstance = axios.create({
  baseURL: 'https://api.dustyourgames.com/api/',
});


const dygApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER: {
      let storageUser = getWithExpiry("user");
      if (storageUser != null) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${storageUser.token}`;
        store.dispatch(saveUser(storageUser.user));
        store.dispatch(saveUserAccount(storageUser.user));
      }
      next(action);
      break;
    }
    case REGISTER: {
      store.dispatch(toggleLoading(true))
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
          if (response.status === 200) {
            store.dispatch(toggleLoading(false))
            store.dispatch(toggleLoginForm(true));
            store.dispatch(sendAlert('check', `INscription réussi : vous pouvez vous connecter !`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenu.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case LOGIN: {
      store.dispatch(toggleLoading(true))
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
          if (response.status === 200) {
            const user = response.data.user;
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${user.token}`;
            setWithExpiry("user", response.data, 129600000);
            store.dispatch(saveUser(user));
            store.dispatch(saveUserAccount(user));
            store.dispatch(sendAlert('check', `Connexion réussi : bienvenue ${response.data.user.pseudo_name}`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenu, vérifiez vos identifiants.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });

      next(action);
      break;
    }
    case LOGOUT:
      store.dispatch(sendAlert('check', `Déconnexion réussi, à bientot !`));
      setTimeout(() => {
        store.dispatch(closeAlert());
      }, 2800);
      axiosInstance.defaults.headers.common.Authorization = null;
      localStorage.removeItem('user')
      next(action);
      break;
    default:
      next(action);
  }
};

export default dygApiMiddleWare;

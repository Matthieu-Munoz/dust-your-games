import axios from 'axios';
// Actions
import {
<<<<<<< HEAD
  LOGIN, LOGOUT, saveUser, REGISTER, EDIT_USER, DELETE_USER, LOGIN_CHECK, loginConfirm, loginCheck
=======
  LOGIN, LOGOUT, saveUser, REGISTER, FETCH_USER, LOGIN_CHECK
>>>>>>> starting login check
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
    case LOGIN_CHECK: {
      store.dispatch(toggleLoading(true))
      let storageToken = getWithExpiry("token");
      let storageUser = getWithExpiry("user");
      if (storageToken != null) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${storageToken}`;
        store.dispatch(saveUser(storageUser));
        store.dispatch(saveUserAccount(storageUser));
        axiosInstance
          .get(
            `${storageUser.id}/test`,
          )
          .then((response) => {
            if (response.status === 200) {
              store.dispatch(toggleLoading(false))
              store.dispatch(loginConfirm(true));
            }
          })
          .catch(() => {
            store.dispatch(toggleLoading(false))
            store.dispatch(loginConfirm(false));
            axiosInstance.defaults.headers.common.Authorization = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            store.dispatch(sendAlert('error', 'Une erreur est survenu, merci de vous reconnecter'));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          });
      } else {
        setTimeout(() => {
          store.dispatch(toggleLoading(false))
        }, 2800);
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
          if (response.status === 201) {
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
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            setWithExpiry("token", response.data.token, 64800000);
            setWithExpiry("user", user, 64800000);
            store.dispatch(loginConfirm(true));
            store.dispatch(saveUser(user));
            store.dispatch(saveUserAccount(user));
            store.dispatch(sendAlert('check', `Connexion réussi : bienvenue ${response.data.user.pseudo_name}`));
            setTimeout(() => {
              store.dispatch(toggleLoading(false))
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
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      next(action);
      break;
    case EDIT_USER: {
      store.dispatch(toggleLoading(true))
      const { account: { pseudo_name, image, email, password } } = store.getState();
      const { user: { id } } = store.getState();
      axiosInstance
        .patch(
          `${id}/profil/edit`,
          {
            email,
            pseudo_name,
            password,
            image,
          },
        )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(toggleLoading(false))
            const user = {
              pseudo_name,
              image,
              email,
              password,
            }
            setWithExpiry("user", user, 64800000);
            store.dispatch(saveUser(user));
            store.dispatch(saveUserAccount(user));
            store.dispatch(sendAlert('check', `Votre profil a bien été modifié.`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenu, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });

      next(action);
      break;
    }
    case DELETE_USER: {
      store.dispatch(toggleLoading(true))
      const { user: { id } } = store.getState();

      axiosInstance
        .delete(
          `${id}/profil/delete`,
        )
        .then((response) => {
          if (response.status === 202) {
            store.dispatch(toggleLoading(false))
            axiosInstance.defaults.headers.common.Authorization = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            store.dispatch(sendAlert('check', `Votre profil a bien été supprimé.`));
            store.dispatch(loginConfirm(false));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenu, merci de réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default dygApiMiddleWare;

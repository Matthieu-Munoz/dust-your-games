import axios from 'axios';
// Actions
import {
  LOGIN, LOGOUT, saveUser, REGISTER, EDIT_USER, DELETE_USER, LOGIN_CHECK, loginConfirm
} from '../actions/user';
import { CONFIRM_DUST, DELETE_GAME, DUST_ALL, DUST_BY, fetchGames, FETCH_GAMES, MANUAL_CONFIRM_DUST, resetSearchGames, saveCategories, saveDustGame, saveGames, SAVE_GAME, selectSearchGame } from '@/actions/games';
import { closeAlert, sendAlert, toggleLoading, toggleModal, toggleModalLoading } from '../actions/app'
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
              store.dispatch(fetchGames());
            }
          })
          .catch(() => {
            store.dispatch(toggleLoading(false))
            store.dispatch(loginConfirm(false));
            axiosInstance.defaults.headers.common.Authorization = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            store.dispatch(sendAlert('error', 'Une erreur est survenue, merci de vous reconnecter'));
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
            store.dispatch(sendAlert('check', `Inscription réussie : vous pouvez vous connecter !`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue. Veuillez réessayer.'));
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
            store.dispatch(sendAlert('check', `Connexion réussie : bienvenue ${response.data.user.pseudo_name}`));
            store.dispatch(toggleLoading(false))
            const firstIntro = localStorage.getItem('firstIntro')
            if (firstIntro === null) {
              localStorage.setItem('firstIntro', JSON.stringify(false))
              store.dispatch(toggleModal('intro'))
            }
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, vérifiez vos identifiants.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });

      next(action);
      break;
    }
    case LOGOUT:
      store.dispatch(sendAlert('check', `Déconnexion réussie, à bientôt !`));
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
              id: id,
              pseudo_name,
              image,
            }
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
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
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
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case FETCH_GAMES: {
      const { user: { id } } = store.getState();
      axiosInstance
        .get(
          `${id}/games`,
        )
        .then((response) => {
          if (response.status === 200) {
            const category = []
            response.data.forEach(currentGame => {
              currentGame.game.category.forEach(currentCategory => {
                const found = category.find(element => element.name === currentCategory.name);
                if (!found) {
                  category.push(currentCategory)
                }
              });
            });
            store.dispatch(saveGames(response.data))
            store.dispatch(saveCategories(category))
            store.dispatch(toggleLoading(false))
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case SAVE_GAME: {
      store.dispatch(toggleModalLoading(true))
      const { games: { addgame, bgaCategories } } = store.getState();
      const { user: { id } } = store.getState();
      const game = addgame.searchGames.filter(obj => {
        return obj.id === addgame.selectedGame;
      });
      const category = []
      game[0].categories.forEach(currentCategory => {
        bgaCategories.forEach(current => {
          if (current.id === currentCategory.id) {
            category.push(current)
          }
        });
      });
      for (const key in category) {
        for (const ite in category[key]) {
          if (ite === 'id' || ite === 'url') {
            delete category[key][ite];
          }
        }
      }
      axiosInstance
        .post(
          `${id}/add`,
          {
            "name": game[0].name,
            "image": game[0].image_url,
            "min_player": game[0].min_players,
            "max_player": game[0].max_players,
            "min_playtime": game[0].min_playtime,
            "max_playtime": game[0].max_playtime,
            "description": game[0].description,
            "category": category,
            "editor": {
              "name": (game[0].primary_publisher.name) ? (game[0].primary_publisher.name) : 'Inconnu',
            },
            "designor": {
              "name": (game[0].primary_designer.name) ? (game[0].primary_designer.name) : 'Inconnu',
            },
            "weight": addgame.dustValue,
          }
        )
        .then((response) => {
          if (response.status === 201) {
            store.dispatch(fetchGames())
            store.dispatch(toggleModalLoading(false))
            store.dispatch(resetSearchGames());
            store.dispatch(selectSearchGame(null));
            store.dispatch(sendAlert('check', `Ce jeu a bien été ajouté à votre liste`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleModalLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case DELETE_GAME: {
      store.dispatch(toggleModalLoading(true))
      const { user: { id } } = store.getState();
      const { games: { selectedGame } } = store.getState();
      axiosInstance
        .delete(
          `${id}/games/${selectedGame}/delete`,
        )
        .then((response) => {
          if (response.status === 202) {
            store.dispatch(toggleModalLoading(false));
            store.dispatch(fetchGames());
            store.dispatch(toggleModal(''));
            store.dispatch(sendAlert('check', `Le jeu a bien été supprimé.`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleModalLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case DUST_ALL: {
      store.dispatch(toggleLoading(true))
      const { user: { id } } = store.getState();
      axiosInstance
        .get(
          `${id}/games/dust`,
        )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(toggleLoading(false))
            store.dispatch(saveDustGame(response.data))
            store.dispatch(toggleModal('dustresult'))
          }
        })
        .catch(() => {
          store.dispatch(toggleModalLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case DUST_BY: {
      store.dispatch(toggleLoading(true))
      const { user: { id } } = store.getState();
      const game = [];
      let i = 0;
      action.games.forEach(current => {
        if (current.checked) {
          game[i] = { "id": current.game.id }
          i++
        }
      });
      axiosInstance
        .post(
          `${id}/games/dustby`,
          {
            "game": game,
          }

        )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(toggleLoading(false))
            store.dispatch(saveDustGame(response.data))
            store.dispatch(toggleModal('dustresult'))
          }
        })
        .catch(() => {
          store.dispatch(toggleModalLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case CONFIRM_DUST: {
      const { user: { id } } = store.getState();
      const { games: { dustgame } } = store.getState();
      axiosInstance
        .patch(
          `${id}/games/adjustweight`,
          {
            "game":
              { "id": dustgame.id }
          }
        )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(fetchGames());
            store.dispatch(sendAlert('check', `Le jeu a bien été dépoussiéré !`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
          setTimeout(() => {
            store.dispatch(closeAlert());
          }, 2800);
        });
      next(action);
      break;
    }
    case MANUAL_CONFIRM_DUST: {
      const { user: { id } } = store.getState();
      const { games: { selectedGame } } = store.getState();
      axiosInstance
        .patch(
          `${id}/games/adjustweight`,
          {
            "game":
              { "id": selectedGame }
          }
        )
        .then((response) => {
          if (response.status === 200) {
            store.dispatch(fetchGames());
            store.dispatch(toggleModal(''));
            store.dispatch(sendAlert('check', `Le jeu a bien été dépoussiéré !`));
            setTimeout(() => {
              store.dispatch(closeAlert());
            }, 2800);
          }
        })
        .catch(() => {
          store.dispatch(toggleLoading(false))
          store.dispatch(sendAlert('error', 'Une erreur est survenue, veuillez réessayer.'));
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

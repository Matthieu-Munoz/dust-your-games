// import axios from 'axios';
import axios from 'axios';

import { setWithExpiry, getWithExpiry } from '@/utils/localStorage';
import {
  FETCH_TOP_GAMES, saveTopGames,
} from '@/actions/dashboard';
import { toggleLoading, toggleModalLoading } from '../actions/app'
import { fetchGames, FETCH_CATEGORIES, saveBGACategories, saveCategories, saveSearchGames, SEARCH_GAME } from '@/actions/games';


const axiosInstance = axios.create({
  baseURL: 'https://api.boardgameatlas.com/api/search?client_id=Hm47mIyylB&',
});
const boardgameatlasApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TOP_GAMES: {
      let storageGames = getWithExpiry("topgames");
      if (storageGames != null) {
        store.dispatch(saveTopGames(storageGames));
        store.dispatch(fetchGames());
      } else {
        axiosInstance
          .get(
            'order_by=rank&limit=3&pretty=true'
          )
          .then((response) => {
            setWithExpiry("topgames", response.data.games, 43200000);
            store.dispatch(fetchGames());
            store.dispatch(saveTopGames(response.data.games));
          })
          .catch(() => {
            console.log('oups...');
          });
      };
      next(action);
      break;
    }
    case FETCH_CATEGORIES: {
      let storageCategories = getWithExpiry("gameCategories");
      if (storageCategories != null) {
        store.dispatch(toggleLoading(false))
        store.dispatch(saveBGACategories(storageCategories));
      } else {
        axios({
          method: 'get',
          url: 'https://api.boardgameatlas.com/api/game/categories?&client_id=Hm47mIyylB',
        })
          .then((response) => {
            store.dispatch(toggleLoading(false))
            setWithExpiry("gameCategories", response.data.categories, 43200000);
            store.dispatch(saveBGACategories(response.data.categories));
          })
          .catch(() => {
            console.log('oups...');
          });
      };
      next(action);
      break;
    }
    case SEARCH_GAME: {
      store.dispatch(toggleModalLoading(true))
      const { games: { addgame } } = store.getState();
      axiosInstance
        .get(
          `order_by=rank&name=${addgame.searchInput}`
        )
        .then((response) => {
          store.dispatch(toggleModalLoading(false))
          store.dispatch(saveSearchGames(response.data.games));
        })
        .catch(() => {
          console.log('oups...');
        });

      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default boardgameatlasApiMiddleWare;
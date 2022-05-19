// import axios from 'axios';
import axios from 'axios';

import { setWithExpiry, getWithExpiry } from '@/utils/localStorage';
import {
  FETCH_TOP_GAMES, saveTopGames,
} from '@/actions/dashboard';
import { toggleLoading } from '../actions/app'


const axiosInstance = axios.create({
  baseURL: 'https://api.boardgameatlas.com/api/search?client_id=Hm47mIyylB&',
});
const boardgameatlasApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TOP_GAMES: {
      let storageGames = getWithExpiry("topgames");
      if (storageGames != null) {
        store.dispatch(toggleLoading(false))
        store.dispatch(saveTopGames(storageGames));
      } else {
        axiosInstance
          .get(
            'order_by=rank&limit=3&pretty=true'
          )
          .then((response) => {
            setWithExpiry("topgames", response.data.games, 43200000);
            store.dispatch(saveTopGames(response.data.games));
            store.dispatch(toggleLoading(false))
          })
          .catch(() => {
            console.log('oups...');
          });
      };
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default boardgameatlasApiMiddleWare;
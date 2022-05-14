// import axios from 'axios';
import axios from 'axios';

import {
  FETCH_TOP_GAMES, saveTopGames,
} from '@/actions/dashboard';

const axiosInstance = axios.create({
  baseURL: 'https://api.boardgameatlas.com/api/search?client_id=Hm47mIyylB&',
});
const boardgameatlasApiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_TOP_GAMES: {
      let storageGames = localStorage.getItem("topgames");
      if (storageGames != null) {
        store.dispatch(saveTopGames(JSON.parse(storageGames)));
      } else {
        axiosInstance
          .get(
            'order_by=rank&limit=3&pretty=true'
          )
          .then((response) => {
            localStorage.setItem("topgames", JSON.stringify(response.data.games));
            store.dispatch(saveTopGames(response.data.games));
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
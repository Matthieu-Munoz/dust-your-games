// import axios from 'axios';

const boardgameatlasApiMiddleWare = (store) => (next) => (action) => {
    switch (action.type) {
      default:
        next(action);
    }
  };
  
  export default boardgameatlasApiMiddleWare;
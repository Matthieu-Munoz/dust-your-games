import { DELETE_USER, LOGIN_CONFIRM, LOGOUT, SAVE_USER } from "Actions/user";

export const initialState = {
  // user id
  id: null,
  // user email
  email: "",
  // user pseudo
  pseudo_name: "",
  // user birthday
  year_of_birth: "",
  // user image
  image: null,
  // user image
  nb_games: 0,
  // is the user logged in
  loginChecked: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      const user = {
        ...state,
        ...action.user,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return {
        ...state,
        ...action.user,
      };
    case LOGIN_CONFIRM:
      return {
        ...state,
        loginChecked: action.value,
      };
    case LOGOUT:
      return {
        ...state,
        id: null,
        loginChecked: false,
        pseudo: null,
        email: "",
        pseudo_name: "",
        year_of_birth: "",
        image: null,
      };
    case DELETE_USER:
      return {
        ...state,
        id: null,
        email: "",
        pseudo_name: "",
        year_of_birth: "",
        image: null,
      };
    default:
      return state;
  }
};

export default reducer;

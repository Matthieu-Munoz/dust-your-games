import {
  TOGGLE_THEME,
  SAVE_THEME,
  TOGGLE_MODAL,
  TOGGLE_MENU,
  TOGGLE_PASSWORD,
  TOGGLE_LOADING,
  SEND_ALERT,
  CLOSE_ALERT,
  TOGGLE_MODAL_LOADING,
  CHANGE_MODAL_SOURCE,
} from "Actions/app";

export const initialState = {
  darkTheme: true,
  modalOpened: false,
  modalComponent: "",
  modalLoading: false,
  modalSource: "",
  menuOpened: false,
  passwordVisible: false,
  loading: true,
  alert: {
    status: false,
    type: "",
    message: "",
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_THEME:
      // Fired when the user wants to switch theme
      return {
        ...state,
        darkTheme: action.theme,
      };
    case SAVE_THEME:
      // Fired on load when there is a theme in localStorage to save it in the state
      return {
        ...state,
        darkTheme: action.theme,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpened: !state.modalOpened,
        modalComponent: action.component,
      };
    case TOGGLE_MODAL_LOADING:
      return {
        ...state,
        modalLoading: action.value,
      };
    case CHANGE_MODAL_SOURCE:
      return {
        ...state,
        modalSource: action.value,
      };
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpened: action.value,
      };
    case TOGGLE_PASSWORD:
      return {
        ...state,
        passwordVisible: action.value,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case SEND_ALERT:
      return {
        ...state,
        alert: {
          status: !state.alert.status,
          type: action.alertType,
          message: action.message,
        },
      };
    case CLOSE_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          status: !state.alert.status,
        },
      };
    default:
      return state;
  }
};

export default reducer;

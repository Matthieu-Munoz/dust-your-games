import {
  CHANGE_HOME_FIELD,
  TOGGLE_HOME_ERROR,
  TOGGLE_HOME_FORM,
} from "Actions/home";
import { LOGIN } from "Actions/user";

export const initialState = {
  // user pseudo
  pseudo_name: "",
  // user birthday
  birthday: "",
  // user email
  email: "",
  // user password
  password: "",
  // user confirmedpassword
  confirmedpassword: "",
  isLoginForm: true,
  isRegisterForm: false,
  isPasswordRecovery: false,
  pseudoError: false,
  emailError: false,
  passwordError: false,
  confirmedpasswordError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_HOME_FORM:
      return {
        ...state,
        pseudo_name: "",
        birthday: "",
        password: "",
        confirmedPassword: "",
        pseudoError: false,
        emailError: false,
        passwordError: false,
        confirmedPasswordError: false,
        isLoginForm: false,
        isRegisterForm: false,
        isPasswordRecovery: false,
        [action.form]: action.value,
      };
    case CHANGE_HOME_FIELD:
      return {
        ...state,
        [action.field]: action.value,
      };
    case LOGIN:
      return {
        ...state,
        password: "",
      };
    case TOGGLE_HOME_ERROR:
      return {
        ...state,
        [`${action.name}Error`]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;

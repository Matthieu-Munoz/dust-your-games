import {
    TOGGLE_LOGIN_FORM, CHANGE_HOME_FIELD, TOGGLE_HOME_ERROR
} from '@/actions/home';
import { LOGIN } from '@/actions/user';

export const initialState = {
    // user pseudo
    pseudo_name: '',
    // user birthday
    birthday: '',
    // user email
    email: '',
    // user password
    password: '',
    // user confirmedpassword
    confirmedpassword: '',
    isLoginForm: true,
    pseudoError: false,
    emailError: false,
    passwordError: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                isLoginForm: action.isLoginForm,
                pseudo_name: '',
                birthday: '',
                password: '',
                confirmedpassword: '',
            }
        case CHANGE_HOME_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case LOGIN:
            return {
                ...state,
                password: '',
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

import { TOGGLE_ERROR } from '@/actions/app';
import {
    TOGGLE_LOGIN_FORM, CHANGE_HOME_FIELD
} from '@/actions/home';

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
        case TOGGLE_ERROR:
            return {
                ...state,
                [`${action.name}Error`]: action.value,
            };
        default:
            return state;
    }
};

export default reducer;

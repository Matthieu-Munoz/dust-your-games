import {
    TOGGLE_EDIT_ACCOUNT, CHANGE_FIELD, SAVE_USER_ACCOUNT, TOGGLE_ACCOUNT_ERROR,
} from '@/actions/account';
import { DELETE_USER, EDIT_USER } from '@/actions/user';

export const initialState = {
    // user pseudo
    pseudo_name: '',
    // User image
    image: null,
    // user email
    email: '',
    // user password
    password: '',
    // user confirmedpassword
    confirmedpassword: '',
    isEdit: false,
    pseudoError: false,
    emailError: false,
    passwordError: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_EDIT_ACCOUNT:
            return {
                ...state,
                isEdit: action.isEdit,
                password: '',
                confirmedpassword: '',
            }
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case SAVE_USER_ACCOUNT:
            return {
                ...state,
                ...action.user,
                password: '',
                confirmedpassword: '',
            };
        case TOGGLE_ACCOUNT_ERROR:
            return {
                ...state,
                [`${action.name}Error`]: action.value,
            };
        case EDIT_USER:
            return {
                ...state,
                isEdit: false,
            };
        case DELETE_USER:
            return {
                ...state,
                isEdit: false,
                pseudo_name: '',
                image: null,
                email: '',
                password: '',
                confirmedpassword: '',
            };
        default:
            return state;
    }
};

export default reducer;
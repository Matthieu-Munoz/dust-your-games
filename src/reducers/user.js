import {
    CHANGE_HOME_FIELD, LOGOUT, SAVE_USER,
} from '@/actions/user';

export const initialState = {
    // user pseudo
    pseudo: '',
    // user email
    email: '',
    // user password
    password: '',
    // user confirmedpassword
    confirmedpassword: '',
    // is the user logged in
    logged: false,
    // token to use in request
    token: null,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_HOME_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        case SAVE_USER:
            return {
                ...state,
                ...action.user,
                email: '',
                password: '',
            };
        case LOGOUT:
            return {
                ...state,
                logged: false,
                pseudo: null,
            };
        default:
            return state;
    }
};

export default reducer;

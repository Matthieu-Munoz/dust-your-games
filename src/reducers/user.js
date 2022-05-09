import {
    CHANGE_USER_FIELD, LOGOUT, SAVE_USER,
} from '@/actions/user';

export const initialState = {
    // user email
    email: 'bouclierman@herocorp.io',
    // user password
    password: 'jennifer',
    // is the user logged in
    logged: false,
    // token to use in request
    token: null,
    // user pseudo
    pseudo: null,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_USER_FIELD:
            return {
                ...state,
                [action.name]: action.value,
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

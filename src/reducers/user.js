import {
    LOGOUT, SAVE_USER,
} from '@/actions/user';

export const initialState = {
    // user email
    email: '',
    // user pseudo
    pseudo_name: '',
    // user birthday
    year_of_birth: '',
    // is the user logged in
    logged: false,
    // token to use in request
    token: null,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                ...action.user,
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

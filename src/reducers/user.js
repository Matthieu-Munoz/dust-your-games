import {
    LOGOUT, SAVE_USER,
} from '@/actions/user';

export const initialState = {
    // user id
    id: 0,
    // user email
    email: '',
    // user pseudo
    pseudo_name: '',
    // user birthday
    year_of_birth: '',
    // user image
    image: null,
    // is the user logged in
    logged: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                ...action.user,
                logged: true,
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

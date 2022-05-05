import {
    TOGGLE_LOGIN_FORM,
} from '@/actions/home';

export const initialState = {
    isLoginForm: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_LOGIN_FORM:
            return {
                ...state,
                isLoginForm: action.isLoginForm,
            }
        default:
            return state;
    }
};

export default reducer;

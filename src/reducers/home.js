import {
    TOGGLE_LOGIN_FORM, CHANGE_HOME_FIELD, TOGGLE_LOADING
} from '@/actions/home';

export const initialState = {
    // user pseudo
    pseudo_name: '',
    // user birthday
    birthday: '',
    // user email
    email: 'test@test.test',
    // user password
    password: 'test',
    // user confirmedpassword
    confirmedpassword: '',
    isLoginForm: true,
    loading: false,
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
        case TOGGLE_LOADING:
            return {
                ...state,
                loading: !state.loading,
            };
        default:
            return state;
    }
};

export default reducer;

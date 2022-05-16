import {
    TOGGLE_EDIT_ACCOUNT, CHANGE_FIELD
} from '@/actions/account';

export const initialState = {
    // user pseudo
    pseudo: '',
    // user birthday
    birthday: '',
    // user email
    email: '',
    // user password
    password: '',
    // user confirmedpassword
    confirmedpassword: '',
    isEdit: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_EDIT_ACCOUNT:
            return {
                ...state,
                isEdit: action.isEdit,
            }
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

export default reducer;
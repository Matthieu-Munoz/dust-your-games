import {
    TOGGLE_EDIT_ACCOUNT,
} from '@/actions/account';

export const initialState = {
    isEdit: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_EDIT_ACCOUNT:
            return {
                ...state,
                isEdit: action.isEdit,
            }
        default:
            return state;
    }
};

export default reducer;
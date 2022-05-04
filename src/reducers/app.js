import {
    TOGGLE_THEME,
} from '@/actions/app';

export const initialState = {
    darkTheme: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                darkTheme: action.theme,
            };
        default:
            return state;
    }
};

export default reducer;

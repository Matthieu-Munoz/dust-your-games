import {
    TOGGLE_THEME, SAVE_THEME,
} from '@/actions/app';

export const initialState = {
    darkTheme: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_THEME:
            // Fired when the user wants to switch theme
            return {
                ...state,
                darkTheme: action.theme,
            };
        case SAVE_THEME:
            // Fired when, on load, the is a theme in localStorage to save it in the state
            return {
                ...state,
                darkTheme: action.theme,
            };
        default:
            return state;
    }
};

export default reducer;

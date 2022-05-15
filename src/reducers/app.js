import {
    TOGGLE_THEME, SAVE_THEME, TOGGLE_MODAL, TOGGLE_MENU, TOGGLE_PASSWORD
} from '@/actions/app';

export const initialState = {
    darkTheme: true,
    modalOpened: false,
    menuOpened: false,
    passwordVisible: false,
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
            // Fired on load when there is a theme in localStorage to save it in the state
            return {
                ...state,
                darkTheme: action.theme,
            };
        case TOGGLE_MODAL:
            return {
                ...state,
                modalOpened: !state.modalOpened,
            };
        case TOGGLE_MENU:
            return {
                ...state,
                menuOpened: action.value,
            };
        case TOGGLE_PASSWORD:
            return {
                ...state,
                passwordVisible: !state.passwordVisible,
            }
        default:
            return state;
    }
};

export default reducer;

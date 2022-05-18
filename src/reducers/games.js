import {
    TOGGLE_FILTER_MENU, TOGGLE_FILTER
} from '@/actions/games';

export const initialState = {
    games: [],
    menuToggled: false,
    toggles: {
        check: false,
        sortAlpha: false,
        sortNum: false,
        sortDir: false,
        categories: false,
        times: false,
        players: false,
        age: false,

    }
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER_MENU:
            return {
                ...state,
                menuToggled: !state.menuToggled,
            }
        case TOGGLE_FILTER:
            return {
                ...state,
                toggles: {
                    ...state.toggles,
                    [action.selector]: action.value,
                }
            }
        default:
            return state;
    }
};

export default reducer;

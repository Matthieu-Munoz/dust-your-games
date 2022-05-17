import {
    TOGGLE_FILTER_MENU,
} from '@/actions/games';

export const initialState = {
    games: [],
    menuToggled: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER_MENU:
            return {
                ...state,
                menuToggled: !state.menuToggled,
            }
        default:
            return state;
    }
};

export default reducer;

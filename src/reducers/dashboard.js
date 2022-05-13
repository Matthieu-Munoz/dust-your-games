import {
    SAVE_TOP_GAMES,
} from '@/actions/dashboard';

export const initialState = {
    games: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SAVE_TOP_GAMES:
            return {
                ...state,
                games: action.games,
            }
        default:
            return state;
    }
};

export default reducer;

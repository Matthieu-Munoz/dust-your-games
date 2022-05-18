import {
    TOGGLE_FILTER_MENU, TOGGLE_FILTER, CHANGE_FIELD, SAVE_SEARCH_GAMES, SELECT_GAME
} from '@/actions/games';

export const initialState = {
    searchInput: '',
    games: [],
    searchGames: [],
    selectedGame: null,
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
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            }
        case TOGGLE_FILTER_MENU:
            return {
                ...state,
                menuToggled: !state.menuToggled,
            }
        case SAVE_SEARCH_GAMES:
            return {
                ...state,
                searchGames: action.games,
            }
        case SELECT_GAME:
            return {
                ...state,
                selectedGame: action.value,
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

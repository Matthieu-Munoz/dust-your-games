import {
    TOGGLE_FILTER_MENU, TOGGLE_FILTER, SAVE_SEARCH_GAMES, CHANGE_SEARCH_FIELD, SAVE_GAMES, SELECT_SEARCH_GAME, SELECT_GAME, SAVE_DUST_GAME, SAVE_CATEGORIES, CHANGE_FIELD, SAVE_FILTERED_GAMES, SAVE_BGA_CATEGORIES, CHECK_GAMES, CHECK_ONE_GAME
} from '@/actions/games';

export const initialState = {
    games: [],
    filteredGames: [],
    bgaCategories: [],
    categories: [],
    selectedGame: null,
    menuToggled: false,
    searchInput: '',
    toggles: {
        checkFilter: false,
        sortAlphaFilter: false,
        sortNumFilter: false,
        sortDirFilter: false,
        categoriesFilter: false,
        timesFilter: false,
        playersFilter: false,
    },
    checkedGames: [],
    addgame: {
        searchInput: '',
        searchGames: [],
        selectedGame: null,
    },
    dustgame: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_FILTER_MENU:
            return {
                ...state,
                menuToggled: !state.menuToggled,
            }
        case CHANGE_SEARCH_FIELD:
            return {
                ...state,
                addgame: {
                    ...state.addgame,
                    [action.field]: action.value,
                },
            }
        case CHANGE_FIELD:
            return {
                ...state,
                [action.field]: action.value,
            }
        case SAVE_SEARCH_GAMES:
            return {
                ...state,
                addgame: {
                    ...state.addgame,
                    searchGames: action.games,
                }
            }
        case SELECT_SEARCH_GAME:
            return {
                ...state,
                addgame: {
                    ...state.addgame,
                    selectedGame: action.value,
                }
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
        case SAVE_GAMES:
            return {
                ...state,
                games: action.games,
                checkedGames: action.games,
            }
        case SAVE_FILTERED_GAMES:
            return {
                ...state,
                filteredGames: action.games,
            }
        case SAVE_DUST_GAME:
            return {
                ...state,
                dustgame: action.game,
            }
        case SAVE_BGA_CATEGORIES:
            return {
                ...state,
                bgaCategories: (action.values) ? action.values : [],
            }
        case SAVE_CATEGORIES:
            return {
                ...state,
                categories: (action.values) ? action.values : [],
            }
        case CHECK_GAMES:
            return {
                ...state,
                checkedGames: action.games,
            }
        case CHECK_ONE_GAME:
            console.log(action.game);
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;

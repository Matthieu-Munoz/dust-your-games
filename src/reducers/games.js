import {
    TOGGLE_FILTER_MENU, TOGGLE_FILTER, SAVE_SEARCH_GAMES, CHANGE_SEARCH_FIELD, SAVE_GAMES, SELECT_SEARCH_GAME, SELECT_GAME, SAVE_DUST_GAME, SAVE_CATEGORIES, CHANGE_FIELD, SAVE_FILTERED_GAMES, SAVE_BGA_CATEGORIES, CHECK_GAME, RESET_SEARCH_GAMES, CHANGE_DUST_VALUE
} from '@/actions/games';

export const initialState = {
    games: [],
    filteredGames: [],
    checkedGames: [],
    bgaCategories: [],
    categories: [],
    times: [],
    players: [],
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
    addgame: {
        searchInput: '',
        searchGames: [],
        selectedGame: null,
        dustValue: 5,
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
        case CHANGE_DUST_VALUE:
            return {
                ...state,
                addgame: {
                    ...state.addgame,
                    dustValue: action.value,
                },
            }
        case RESET_SEARCH_GAMES:
            return {
                ...state,
                addgame: {
                    searchInput: '',
                    searchGames: [],
                    selectedGame: null,
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
                    categoriesFilter: false,
                    timesFilter: false,
                    playersFilter: false,
                    [action.selector]: action.value,
                }
            }
        case SAVE_GAMES:
            action.games.forEach(element => {
                element.checked = false;
            })
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
        case CHECK_GAME:
            state.checkedGames.forEach(element => {
                if (element.game.id === action.gameId) {
                    element.checked = !element.checked;
                }
            })
            return {
                ...state,
            }
        default:
            return state;
    }
};

export default reducer;

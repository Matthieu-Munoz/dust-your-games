// Used to show/hide the filter menu
export const TOGGLE_FILTER_MENU = 'TOGGLE_FILTER_MENU';
export const toggleFilterMenu = () => ({
    type: TOGGLE_FILTER_MENU,
});
// Used to active/disable a filter
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const toggleFilter = (selector, value) => ({
    type: TOGGLE_FILTER,
    selector,
    value,
});
// Handle a change inside an input
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, field) => ({
    type: CHANGE_FIELD,
    value,
    field,
});
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const changeSearchField = (value, field) => ({
    type: CHANGE_SEARCH_FIELD,
    value,
    field,
});
export const FETCH_GAMES = 'FETCH_GAMES';
export const fetchGames = () => ({
    type: FETCH_GAMES,
});
// Search a game un BGA API
export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = () => ({
    type: SEARCH_GAME,
});
export const SAVE_SEARCH_GAMES = 'SAVE_SEARCH_GAMES';
export const saveSearchGames = (games) => ({
    type: SAVE_SEARCH_GAMES,
    games,
});
export const SELECT_SEARCH_GAME = 'SELECT_SEARCH_GAME';
export const selectSearchGame = (value) => ({
    type: SELECT_SEARCH_GAME,
    value,
});
export const SAVE_DUST_GAME = 'SAVE_DUST_GAME';
export const saveDustGame = (game) => ({
    type: SAVE_DUST_GAME,
    game,
});
export const SELECT_GAME = 'SELECT_GAME';
export const selectGame = (value) => ({
    type: SELECT_GAME,
    value,
});
export const SAVE_GAME = 'SAVE_GAME';
export const saveGame = () => ({
    type: SAVE_GAME,
});
export const SAVE_GAMES = 'SAVE_GAMES';
export const saveGames = (games) => ({
    type: SAVE_GAMES,
    games,
});
export const DELETE_GAME = 'DELETE_GAME';
export const deleteGame = () => ({
    type: DELETE_GAME,
});
export const DUST_ALL = 'DUST_ALL';
export const dustAll = () => ({
    type: DUST_ALL,
});
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const fetchCategories = () => ({
    type: FETCH_CATEGORIES,
});
export const SAVE_BGA_CATEGORIES = 'SAVE_BGA_CATEGORIES';
export const saveBGACategories = (values) => ({
    type: SAVE_BGA_CATEGORIES,
    values,
});
export const SAVE_CATEGORIES = 'SAVE_CATEGORIES';
export const saveCategories = (values) => ({
    type: SAVE_CATEGORIES,
    values,
});
export const SAVE_FILTERED_GAMES = 'SAVE_FILTERED_GAMES';
export const saveFilteredGames = (games) => ({
    type: SAVE_FILTERED_GAMES,
    games,
});
export const CONFIRM_DUST = 'CONFIRM_DUST';
export const confirmDust = () => ({
    type: CONFIRM_DUST,
});

export const CHECK_GAMES = 'CHECK_GAMES';
export const checkGames = (games) => ({
    type: CHECK_GAMES,
    games,
});
export const CHECK_ONE_GAME = 'CHECK_ONE_GAME';
export const checkOneGame = (game) => ({
    type: CHECK_ONE_GAME,
    game,
});



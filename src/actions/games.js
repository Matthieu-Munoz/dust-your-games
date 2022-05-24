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
// Handle change inside an the search input
export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';
export const changeSearchField = (value, field) => ({
    type: CHANGE_SEARCH_FIELD,
    value,
    field,
});
// Fetch games from the API
export const FETCH_GAMES = 'FETCH_GAMES';
export const fetchGames = () => ({
    type: FETCH_GAMES,
});
// Addgames modal
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
export const RESET_SEARCH_GAMES = 'RESET_SEARCH_GAMES';
export const resetSearchGames = () => ({
    type: RESET_SEARCH_GAMES,
});
export const SAVE_FILTERED_GAMES = 'SAVE_FILTERED_GAMES';
export const saveFilteredGames = (games) => ({
    type: SAVE_FILTERED_GAMES,
    games,
});
export const CHECK_GAME = 'CHECK_GAME';
export const checkGame = (gameId) => ({
    type: CHECK_GAME,
    gameId,
});
export const UNCHECK_ALL = 'UNCHECK_ALL';
export const uncheckAll = () => ({
    type: UNCHECK_ALL,
});

// Select a game to open the info modal
export const SELECT_GAME = 'SELECT_GAME';
export const selectGame = (value) => ({
    type: SELECT_GAME,
    value,
});
// Select a filter
export const SELECT_FILTER = 'SELECT_FILTER';
export const selectFilter = (filter, value) => ({
    type: SELECT_FILTER,
    filter,
    value,
});

// Save a game through our api in our BDD
export const SAVE_GAME = 'SAVE_GAME';
export const saveGame = () => ({
    type: SAVE_GAME,
});
// Save User Games in state
export const SAVE_GAMES = 'SAVE_GAMES';
export const saveGames = (games) => ({
    type: SAVE_GAMES,
    games,
});
// Delete a game from the API 
export const DELETE_GAME = 'DELETE_GAME';
export const deleteGame = () => ({
    type: DELETE_GAME,
});
// Dust all games
export const DUST_ALL = 'DUST_ALL';
export const dustAll = () => ({
    type: DUST_ALL,
});
// Dust only selected games
export const DUST_BY = 'DUST_BY';
export const dustBy = (games) => ({
    type: DUST_BY,
    games,
});
// Confirm dusting and adjust game weight
export const CONFIRM_DUST = 'CONFIRM_DUST';
export const confirmDust = () => ({
    type: CONFIRM_DUST,
});
// MAnuelly confirm dusting and adjust game weight
export const MANUAL_CONFIRM_DUST = 'MANUAL_CONFIRM_DUST';
export const manualConfirmDust = () => ({
    type: MANUAL_CONFIRM_DUST,
});
// If the user accepte the dusting result
export const SAVE_DUST_GAME = 'SAVE_DUST_GAME';
export const saveDustGame = (game) => ({
    type: SAVE_DUST_GAME,
    game,
});
export const CHANGE_DUST_VALUE = 'CHANGE_DUST_VALUE';
export const changeDustValue = (value) => ({
    type: CHANGE_DUST_VALUE,
    value,
});
// Fetch categories from BGA API
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const fetchCategories = () => ({
    type: FETCH_CATEGORIES,
});
// Save BGA categories in our state
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


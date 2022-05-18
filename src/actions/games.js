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
// Search a game un BGA API
export const SEARCH_GAME = 'SEARCH_GAME';
export const searchGame = (value) => ({
    type: SEARCH_GAME,
    value,
});
export const SAVE_SEARCH_GAMES = 'SAVE_SEARCH_GAMES';
export const saveSearchGames = (games) => ({
    type: SAVE_SEARCH_GAMES,
    games,
});
export const SELECT_GAME = 'SELECT_GAME';
export const selectGame = (value) => ({
    type: SELECT_GAME,
    value,
});

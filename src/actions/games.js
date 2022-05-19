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

export const FETCH_GAMES = 'FETCH_GAMES';
export const fetchGames = () => ({
    type: FETCH_GAMES,
});

export const SAVE_GAME = 'SAVE_GAME';
export const saveGame = (game) => ({
    type: SAVE_GAME,
    game,
});


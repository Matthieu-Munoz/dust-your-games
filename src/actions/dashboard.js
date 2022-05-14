export const FETCH_TOP_GAMES = 'FETCH_TOP_GAMES';
export const fetchTopGames = () => ({
    type: FETCH_TOP_GAMES,
});


export const SAVE_TOP_GAMES = 'SAVE_TOP_GAMES';
export const saveTopGames = (games) => ({
    type: SAVE_TOP_GAMES,
    games,
});
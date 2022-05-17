export const TOGGLE_FILTER_MENU = 'TOGGLE_FILTER_MENU';
export const toggleFilterMenu = () => ({
    type: TOGGLE_FILTER_MENU,
});

export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const toggleFilter = (selector, value) => ({
    type: TOGGLE_FILTER,
    selector,
    value,
});

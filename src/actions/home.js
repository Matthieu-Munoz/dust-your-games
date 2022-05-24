export const TOGGLE_HOME_FORM = 'TOGGLE_HOME_FORM';
export const toggleHomeForm = (form, value) => ({
    type: TOGGLE_HOME_FORM,
    form,
    value,
});
// Handle a change inside an input
export const CHANGE_HOME_FIELD = 'CHANGE_HOME_FIELD';
export const changeHomeField = (value, field) => ({
    type: CHANGE_HOME_FIELD,
    value,
    field,
});
// Used to toggle value (true/false) of an error
export const TOGGLE_HOME_ERROR = 'TOGGLE_HOME_ERROR';
export const toggleHomeError = (name, value) => ({
    type: TOGGLE_HOME_ERROR,
    name,
    value,
});





// Used to switch into edit mode
export const TOGGLE_EDIT_ACCOUNT = 'TOGGLE_EDIT_ACCOUNT';
export const toggleEditAccount = (isEdit) => ({
    type: TOGGLE_EDIT_ACCOUNT,
    isEdit,
});
// Handle a change inside an input
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, field) => ({
    type: CHANGE_FIELD,
    value,
    field,
});
// Save user info from API inside account state
export const SAVE_USER_ACCOUNT = 'SAVE_USER_ACCOUNT';
export const saveUserAccount = (user) => ({
    type: SAVE_USER_ACCOUNT,
    user,
});
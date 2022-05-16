export const TOGGLE_EDIT_ACCOUNT = 'TOGGLE_EDIT_ACCOUNT';
export const toggleEditAccount = (isEdit) => ({
    type: TOGGLE_EDIT_ACCOUNT,
    isEdit,
});

export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, field) => ({
    type: CHANGE_FIELD,
    value,
    field,
});

export const SAVE_USER_ACCOUNT = 'SAVE_USER_ACCOUNT';
export const saveUserAccount = (user) => ({
    type: SAVE_USER_ACCOUNT,
    user,
});
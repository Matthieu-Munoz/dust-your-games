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




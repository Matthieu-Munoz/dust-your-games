export const TOGGLE_USER_ACCOUNT = 'TOGGLE_USER_ACCOUNT';
export const toggleUserAccount = (isEdit) => ({
    type: TOGGLE_USER_ACCOUNT,
    isEdit,
});
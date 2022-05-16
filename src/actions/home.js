export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const toggleLoginForm = (isLoginForm) => ({
    type: TOGGLE_LOGIN_FORM,
    isLoginForm,
});

export const CHANGE_HOME_FIELD = 'CHANGE_HOME_FIELD';
export const changeHomeField = (value, field) => ({
    type: CHANGE_HOME_FIELD,
    value,
    field,
});

export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = () => ({
    type: TOGGLE_LOADING,
});




export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const changeUserField = (value, name) => ({
    type: CHANGE_USER_FIELD,
    value,
    name,
});

export const LOGIN = 'LOGIN';
export const login = () => ({
    type: LOGIN,
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (user) => ({
    type: SAVE_USER,
    user,
});

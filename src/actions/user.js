export const CHANGE_HOME_FIELD = 'CHANGE_HOME_FIELD';
export const changeHomeField = (value, field) => ({
  type: CHANGE_HOME_FIELD,
  value,
  field,
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


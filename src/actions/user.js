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

export const REGISTER = 'REGISTER';
export const register = () => ({
    type: REGISTER,
});


// Handle user login with the dyg API (middleware)
export const LOGIN = 'LOGIN';
export const login = () => ({
    type: LOGIN,
});
// Handle user logout with the dyg API (middleware)
export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT,
});
// Handle user registering with the dyg API (middleware)
export const REGISTER = 'REGISTER';
export const register = () => ({
    type: REGISTER,
});
// Fetch user data from the dyg API (middleware)
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
    type: FETCH_USER,
});
// Save user data from the dyg API (middleware) in user state
export const SAVE_USER = 'SAVE_USER';
export const saveUser = (user) => ({
    type: SAVE_USER,
    user,
});



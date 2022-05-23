// Fetch user data from the dyg API (middleware)
export const FETCH_USER = 'FETCH_USER';
export const fetchUser = () => ({
    type: FETCH_USER,
});
// Check user token with the api
export const LOGIN_CHECK = 'LOGIN_CHECK';
export const loginCheck = () => ({
    type: LOGIN_CHECK,
});
// Used to confirm the user connection
export const LOGIN_CONFIRM = 'LOGIN_CONFIRM';
export const loginConfirm = (value) => ({
    type: LOGIN_CONFIRM,
    value
});
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
export const FORCED_LOGOUT = 'FORCED_LOGOUT';
export const forcedLogout = () => ({
    type: FORCED_LOGOUT,
});

// Handle user registering with the dyg API (middleware)
export const REGISTER = 'REGISTER';
export const register = () => ({
    type: REGISTER,
});
// Save user data from the dyg API (middleware) in user state
export const SAVE_USER = 'SAVE_USER';
export const saveUser = (user) => ({
    type: SAVE_USER,
    user,
});
// Handle User info modification
export const EDIT_USER = 'EDIT_USER';
export const editUser = () => ({
    type: EDIT_USER,
});
// Handle User deletion
export const DELETE_USER = 'DELETE_USER';
export const deleteUser = () => ({
    type: DELETE_USER,
});




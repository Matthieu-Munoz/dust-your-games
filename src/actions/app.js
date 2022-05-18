// Used to switch between theme (dark/light)
export const TOGGLE_THEME = 'TOGGLE_THEME';
export const toggleTheme = (theme) => ({
    type: TOGGLE_THEME,
    theme,
});
// Used to load the user preference (dark/light) from localStorage
export const LOAD_THEME = 'LOAD_THEME';
export const loadTheme = () => ({
    type: LOAD_THEME,
});
// Used to save the user preference (dark/light) in localStorage
export const SAVE_THEME = 'SAVE_THEME';
export const saveTheme = (theme) => ({
    type: SAVE_THEME,
    theme,
});
// Used to show/hide a modal
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (component) => ({
    type: TOGGLE_MODAL,
    component,
});
// Used to show/hide the menu
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const toggleMenu = (value) => ({
    type: TOGGLE_MENU,
    value,
});
// Used to show/hide the password inside and input
export const TOGGLE_PASSWORD = 'TOGGLE_PASSWORD';
export const togglePassword = () => ({
    type: TOGGLE_PASSWORD,
});
// Used to display or hide the loader
export const TOGGLE_LOADING = 'TOGGLE_LOADING';
export const toggleLoading = (value) => ({
    type: TOGGLE_LOADING,
    value,
});
// Used to send an alert message with a type and a message
export const SEND_ALERT = 'SEND_ALERT';
export const sendAlert = (alertType, message) => ({
    type: SEND_ALERT,
    alertType,
    message,
});
// Used to closed the alert message
export const CLOSE_ALERT = 'CLOSE_ALERT';
export const closeAlert = () => ({
    type: CLOSE_ALERT,
});
// Used to toggle value (true/false) of an error
export const TOGGLE_ERROR = 'TOGGLE_ERROR';
export const toggleError = (name, value) => ({
    type: TOGGLE_ERROR,
    name,
    value,
});


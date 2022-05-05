import {
    TOGGLE_THEME, LOAD_THEME, saveTheme,
} from '@/actions/app';

const globalMiddleWare = (store) => (next) => (action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            // Intercept the TOGGLE_THEME action and store its value in the localStorage
            localStorage.setItem("darkTheme", JSON.stringify(action.theme));
            next(action);
            break;
        case LOAD_THEME:
            // Intercept the LOAD_THEME action and load the theme from the localStorage, dispatch it to the store only if it contains something.
            let storageTheme = localStorage.getItem("darkTheme");
            if (storageTheme != null) {
                store.dispatch(saveTheme(JSON.parse(storageTheme)));
            };
            next(action);
            break;
        default:
            next(action);
    }
};

export default globalMiddleWare;
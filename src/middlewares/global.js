import {
    TOGGLE_THEME, LOAD_THEME, saveTheme,
} from '@/actions/app';

const globalMiddleWare = (store) => (next) => (action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            console.log('TOGGLE_THEME fired');
            localStorage.setItem("darkTheme", JSON.stringify(action.theme));
            next(action);
            break;
        case LOAD_THEME:
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
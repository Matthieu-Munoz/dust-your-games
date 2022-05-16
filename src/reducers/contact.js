import {
    CHANGE_INPUT_VALUE,
    SUBMIT_FORM
} from '@/actions/contact';

export const initialState = {
    isSubmitForm: true,
    pseudo: '',
    email: '',
    objet: '',
    message: '',
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SUBMIT_FORM:
            return {
                ...state,
             isSubmitForm: action.isSubmitForm,

            }
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};


export default reducer;

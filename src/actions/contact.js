export const SUBMIT_FORM = 'SUBMIT_FORM';
export const isSubmitForm = (isSubmitForm) => ({
    type: SUBMIT_FORM,
    isSubmitForm,
});

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const changeInputValue = (value, field) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  field,
});


// Handle form submission
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const isSubmitForm = (isSubmitForm) => ({
  type: SUBMIT_FORM,
  isSubmitForm,
});
// Handle a change inside an input
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const changeInputValue = (value, field) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  field,
});


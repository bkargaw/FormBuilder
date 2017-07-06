export const RECEIVE_FORM = 'RECEIVE_FORM';
export const REMOVE_FORM = 'REMOVE_FORM';

export const receiveForm = (form) =>({
  type: RECEIVE_FORM,
  form
});

export const removeForm = (id) =>({
  type: REMOVE_FORM,
  id
});

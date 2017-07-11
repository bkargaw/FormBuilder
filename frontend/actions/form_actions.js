export const RECEIVE_FORM = 'RECEIVE_FORM';
export const RECEIVE_FORMS = 'RECEIVE_FORMS';
export const REMOVE_FORM = 'REMOVE_FORM';
export const REMOVE_CHILD_FORM = 'REMOVE_CHILD_FORM';

export const receiveForm = (form) =>({
  type: RECEIVE_FORM,
  form
});
export const receiveForms = (forms) =>({
  type: RECEIVE_FORMS,
  forms
});

export const removeForm = (id) =>({
  type: REMOVE_FORM,
  id
});

export const removeChildForm = (ids) =>({
  type: REMOVE_CHILD_FORM,
  ids
});

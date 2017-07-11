import {RECEIVE_FORM,RECEIVE_FORMS, REMOVE_FORM,
        REMOVE_CHILD_FORM} from '../actions/form_actions';

import {merge} from 'lodash';

const createReducer = (state = {} , action)=> {
  Object.freeze(state);
  let newState;
  let newForm;
  let parentId;
  let childId;
  switch (action.type) {
    case RECEIVE_FORM:
      let id = action.form.id
      newForm= {}
      newForm[id] = action.form
      return merge({}, state , newForm);
    case RECEIVE_FORMS:
      parentId = action.forms[0].id
      childId = action.forms[1].id
      newForm= {}
      newForm[parentId] = action.forms[0]
      newForm[childId] = action.forms[1]
      return merge({}, state , newForm);
    case REMOVE_FORM:
      newState = merge({}, state);
      let deleteIds = [action.id]
      while(deleteIds.length){
        let id = deleteIds.pop();
        newState[id].sub_form.forEach((id) => {deleteIds.push(id)})
        delete newState[id];
      }
      return newState;
    case REMOVE_CHILD_FORM:
      newState = merge({}, state);
      parentId = action.ids[0];
      childId = action.ids[1];
      let array = newState[parentId]['sub_form'];
      let index = array.indexOf(childId);
      array.splice(index, 1);
      return newState;
    default:
    return state;
  }
};

export default createReducer;

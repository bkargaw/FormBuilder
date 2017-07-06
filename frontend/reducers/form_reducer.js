import {RECEIVE_FORM,
        REMOVE_FORM} from '../actions/form_actions';

import {merge} from 'lodash';

const createReducer = (state = {} , action)=> {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_FORM:
      let id = action.form.id
      let newForm= {}
      newForm[id] = action.form
      return merge({}, state , newForm);
    case REMOVE_FORM:
      newState = merge({}, state);
      let deleteIds = [action.id]
      while(deleteIds.length){
        let id = deleteIds.pop();
        debugger
        newState[id].sub_form.forEach((child_id) => {deleteIds.push(child_id)})
        delete newState[id];
      }
      return newState;
    default:
    return state;
  }
};

export default createReducer;

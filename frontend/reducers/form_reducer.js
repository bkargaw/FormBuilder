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
      let newState = merge({}, state , newForm);
      return newState;
    case REMOVE_FORM:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
    return state;
  }
};

export default createReducer;

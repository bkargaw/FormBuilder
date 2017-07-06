import React from 'react';
import { connect } from 'react-redux';
import {receiveForm, removeForm} from '../../actions/form_actions';

import MainForm from './main_form'

const mapStateToProps = (state, ownProps) =>  {
  debugger
  return({
    forms: Object.keys(state.forms).map(id => state.forms[id]),
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  if(ownProps.updateTasks){
    return ({
      receiveForm: (form) => dispatch(receiveForm(form)),
      removeForm: (id) => dispatch(removeForm(id))
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);

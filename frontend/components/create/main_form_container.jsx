import React from 'react';
import { connect } from 'react-redux';
import {receiveForms,
        receiveForm,
        removeForm,
        removeChildForm} from '../../actions/form_actions';

import MainForm from './main_form'

const mapStateToProps = (state, ownProps) =>  {
  return({
    forms: Object.keys(state.forms).map(id => state.forms[id]),
    formsobj: state.forms
  });
};

const mapDispatchToProps = dispatch => ({
  receiveForms: (forms) => dispatch(receiveForms(forms)),
  receiveForm: (form) => dispatch(receiveForm(form)),
  removeChildForm: (ids) => dispatch(removeChildForm(ids)),
  removeForm: (id) => dispatch(removeForm(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);

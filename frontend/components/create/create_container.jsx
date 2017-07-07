import React from 'react';
import { connect } from 'react-redux';
import {receiveForm, removeForm} from '../../actions/form_actions';

import Create from './create_form'

const mapStateToProps = (state, ownProps) =>  {
  return({
    forms: Object.keys(state.forms).map(id => state.forms[id])
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
    return ({
      receiveForm: (form) => dispatch(receiveForm(form))
    });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create);

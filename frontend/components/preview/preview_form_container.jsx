import React from 'react';
import { connect } from 'react-redux';

import PreviewForm from './preview_form'

const mapStateToProps = (state, ownProps) =>  {
  return({
    forms: Object.keys(state.forms).map(id => state.forms[id]),
    formsobj: state.forms
  });
};

// const mapDispatchToProps = (dispatch,ownProps) => {
//     return ({
//       receiveForm: (form) => dispatch(receiveForm(form))
//     });
// }

export default connect(
  mapStateToProps,
  null
)(PreviewForm);

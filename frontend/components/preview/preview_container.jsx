import React from 'react';
import { connect } from 'react-redux';

import Preview from './preview'

const mapStateToProps = (state, ownProps) =>  {
  return({
    forms: Object.keys(state.forms).map(id => state.forms[id])
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
)(Preview);

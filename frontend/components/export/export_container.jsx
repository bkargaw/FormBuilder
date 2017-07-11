import React from 'react';
import { connect } from 'react-redux';
import Export from './export'

const mapStateToProps = (state, ownProps) =>  {
  return({
    formsobj: state.forms
  });
};

export default connect(
  mapStateToProps,
  null
)(Export);

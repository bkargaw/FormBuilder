import React from 'react';
import { connect } from 'react-redux';
import {receiveMain, removeMain} from '../../actions/main_form_actions';

import Main from './main_form'

const mapStateToProps = (state, ownProps) =>  {
  return({
    mains: Object.keys(state.mains).map(id => state.mains[id]),
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  if(ownProps.updateTasks){
    return ({
      receiveMain: (form) => dispatch(receiveMain(form)),
      removeMain: (id) => dispatch(removeMain(id))
    });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

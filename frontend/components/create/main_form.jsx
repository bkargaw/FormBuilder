import React from 'react'
import { Button } from 'react-bootstrap'

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.createSubForm = this.createSubForm.bind(this);
  }

  createSubForm(){

  }

  render(){
    debugger
    // let mains = this.props.mains.forEach{ (el) =>}
    //  <Button onClick= {this.createSubForm} bsStyle="primary">Add Input</Button>
    return(
      <div>
        HI
      </div>
    )
  }
}

export default MainForm;

import React from 'react'
import { Button } from 'react-bootstrap'

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.createInput = this.createInput.bind(this);
  }

  createInput(){

  }

  render(){
    // let mains = this.props.mains.forEach{ (el) =>}
    return(
      <div>
         <Button onClick= {this.createInput} bsStyle="primary">Add Input</Button>
      </div>
    )
  }
}

export default MainForm;

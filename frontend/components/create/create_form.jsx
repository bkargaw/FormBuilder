import React from 'react'
import { Button } from 'react-bootstrap'
import MainForm from './main_form_container'

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.createInput = this.createInput.bind(this);
  }

  createInput(){
    let id = this.props.forms.length + 1
    let form =
    {
      id,
      formType: 'head',
      question: "",
      type: "",
      answer: "",
      sub_form: []
    }
    this.props.receiveForm(form);

  }

  render(){
    debugger
    let forms = this.props.forms.forEach( (el) =>
      <MainForm data={ el }/>
    )
    return(
      <div>
          { forms }
         <Button onClick= {this.createInput} bsStyle="primary">Add Input</Button>
      </div>
    )
  }
}

export default CreateForm;

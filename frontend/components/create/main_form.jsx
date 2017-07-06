import React from 'react';
import {FormGroup, ControlLabel,
        FormControl, Button} from 'react-bootstrap';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      id: this.props.data.id,
      formType: this.props.data.formType,
      question: this.props.data.question,
      type: this.props.data.type,
      answer: this.props.data.answer,
      sub_form: this.props.data.sub_form
    }
    this.createSubForm = this.createSubForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  createSubForm(){
    let length = this.props.forms.length
    let id = length ? this.props.forms[length -1].id + 1 : 1

    let form =
    {
      id,
      formType: 'sub',
      question: "",
      type: "",
      answer: "",
      sub_form: []
    }
    this.props.receiveForm(form);
    debugger
    let sub_form = this.state.sub_form.push(id)
    this.setState({sub_form}, () => this.props.receiveForm(this.state))
  }

  deleteForm(){
    let id = this.props.data.id
    this.props.removeForm(id)
  }

  render(){
    return(
      <div>
        <form className='mainForm'>
          <FormGroup
             id="formControlsText">
            <ControlLabel>Question</ControlLabel>
            <FormControl
             type="text"
             placeholder="Enter text" />
          </FormGroup>

          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Type</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="Yes/No">Yes/No</option>
              <option value="Text">Text</option>
              <option value="Number">Number</option>
            </FormControl>
          </FormGroup>
          <Button onClick= {this.createSubForm} bsStyle="primary">Add Sub-Input</Button>
          <Button onClick= {this.deleteForm} bsStyle="danger">Delete</Button>

        </form>
      </div>
    )
  }
}

export default MainForm;

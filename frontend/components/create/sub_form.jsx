import React from 'react'
import {FormGroup, ControlLabel,
        FormControl, Button} from 'react-bootstrap';

class SubForm extends React.Component {
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
    this.deleteForm = this.deleteForm.bind(this);  }

    createSubForm(){
      let length = this.props.forms.length
      let id = length ? this.props.forms[length -1].id + 1 : 1

      let form =
      {
        id,
        formType: 'sub',
        condition: "",
        question: "",
        type: "",
        answer: "",
        sub_form: []
      }
      this.props.receiveForm(form);
      let sub_form = this.state.sub_form.slice(0);
      sub_form.push(id);
      this.setState({sub_form}, () => this.props.receiveForm(this.state))
    }

    deleteForm(){
      let id = this.props.data.id
      this.props.removeForm(id)
    }

  render(){
    let sub_forms = <ul>
        {this.state.sub_form.map((id) => {
          let form = this.props.formsobj[id]
          if (form['formType'] == 'sub'){
            return (
              <li key={form.id}><SubForm data={form}/></li>
              )
          }
            })
        }
    </ul>
    return(
      <div>
        <form className='form mainform'>
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
        { sub_forms }
      </div>
    )
  }
}

export default SubForm;

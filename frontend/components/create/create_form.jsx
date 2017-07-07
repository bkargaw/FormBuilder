import React from 'react'
import { Button } from 'react-bootstrap'
import MainForm from './main_form_container'

class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.createInput = this.createInput.bind(this);
  }

  createInput(){
    let length = this.props.forms.length
    let id = length ? this.props.forms[length -1].id + 1 : 1

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
    let main_forms = <ul>
        {this.props.forms.map((el) => {
          if (el['formType'] == 'head'){
            return (
              <li key={el.id}><MainForm data={el}/></li>
              )
          }
            })
        }
    </ul>

    return(
      <div className = 'createForm'>
          { main_forms }
         <Button onClick= {this.createInput} bsStyle="primary">Add Input</Button>
      </div>
    )
  }
}

export default CreateForm;

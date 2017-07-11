import React from 'react';
import {FormGroup, ControlLabel,
        FormControl, Button, Radio} from 'react-bootstrap';
import MF from './main_form_container'


class MainForm extends React.Component {
  constructor(props) {
    super(props);
    let id = this.props.id
    this.state = {
      id: this.props.id,
      formType: this.props.formsobj[id].formType,
      parentId:  this.props.formsobj[id].parentId,
      question: this.props.formsobj[id].question,
      type: this.props.formsobj[id].type,
      sub_form:  this.props.formsobj[id].sub_form,
      condition:  this.props.formsobj[id].condition,
      condition_value:  this.props.formsobj[id].condition_value
    }
    this.createSubForm = this.createSubForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
  }

  componentDidMount(){
  }

  componentWillReceiveProps(newProps){
    let id = this.state.id
    if (newProps) {
      let formType =  newProps.formsobj[id].formType
      let parentId =   newProps.formsobj[id].parentId
      let question =  newProps.formsobj[id].question
      let type =  newProps.formsobj[id].type
      let sub_form =   newProps.formsobj[id].sub_form
      let condition =   newProps.formsobj[id].condition
      let condition_value =   newProps.formsobj[id].condition_value
      this.setState({
        formType, parentId, question, type, sub_form, condition, condition_value
      })
    }
  }

  createSubForm(){
    let length = this.props.forms.length
    let id = length ? this.props.forms[length -1].id + 1 : 1

    let form =
    {
      id,
      formType: 'sub',
      parentId: this.state.id,
      condition: "",
      condition_value: "",
      question: "",
      type: "",
      sub_form: []
    }
    let sub_form = this.state.sub_form.slice(0);
    if (!sub_form.includes(id)) sub_form.push(id);
    this.setState({sub_form}, () => {this.props.receiveForms([this.state, form])})
  }

  deleteForm(){
    let id = this.state.id
    this.props.removeForm(id)
    if (this.state.formType == 'sub') {
      let parentId = this.state.parentId
      this.props.removeChildForm([parentId, id])
    }
  }

  update(field){
    let that = this
    return (e)=> {
      let value = e.target.value
      that.setState({[field]: value }, ()=> that.props.receiveForm(that.state))
    }
  }

  render(){
    let indent = {}
    let id = this.state.id
    let sub_forms = <ul>
        {this.props.formsobj[id].sub_form.map((id) => {
          let form = this.props.formsobj[id]
          if (form['formType'] == 'sub'){
            return (
              <li key={form.id}><MF id={id}
                                formType={'sub'}/>
              </li>
              )
          }
            })
        }
    </ul>

    let content;
    let question =<FormGroup id="formControlsText">
                    <ControlLabel>Question</ControlLabel>
                    <FormControl
                      onChange={this.update('question')}
                      type="text"
                      value = {this.state.question}
                      placeholder="Enter text" />
                  </FormGroup>

      let type =   <FormGroup
                      controlId="formControlsSelect">
                      <ControlLabel>Type</ControlLabel>
                      <FormControl
                        onChange={this.update('type')}
                        componentClass="select" value = {this.state.type}
                        placeholder="select">
                        <option value="">select</option>
                        <option value="Yes/No">Yes/No</option>
                        <option value="Text">Text</option>
                        <option value="Number">Number</option>
                      </FormControl>
                    </FormGroup>

      let buttons = <div>
                      <Button onClick= {this.createSubForm}
                        bsStyle="primary">Add Sub-Input</Button>
                      <Button onClick= {this.deleteForm}
                         bsStyle="danger">Delete</Button>
                     </div>
    if (this.state.formType == 'head'){
      content =   <form className='form createFormSection'>
                      { question }
                      { type }
                      { buttons }
                    </form>

    }else{
      let condition;
      indent = {marginLeft: "50px"}
      let parentId = this.state.parentId
        switch (this.props.formsobj[parentId].type) {
          case 'Text':
            condition = <div className='condition'>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Condition</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"
                              onChange={this.update('condition')}
                              value ={this.state.condition} >
                              <option value="">select</option>
                              <option value="Equals">Equals</option>
                            </FormControl>
                          </FormGroup>
                          <FormGroup
                             id="formControlsText">
                            <FormControl
                              onChange={this.update('condition_value')}
                              type="text"
                              value ={this.state.condition_value}
                              placeholder="Enter text" />
                          </FormGroup>
                        </div>
            break;
          case 'Number':
            condition = <div className='condition'>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Condition</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"
                              onChange={this.update('condition')}
                              value ={this.state.condition} >
                              <option value="">select</option>
                              <option value="Equals">Equals</option>
                              <option value="Greater than">Greater than</option>
                              <option value="Less than">Less than</option>
                            </FormControl>
                          </FormGroup>
                          <FormGroup
                             id="formControlsText">
                            <FormControl
                              onChange={this.update('condition_value')}
                              type="number"
                              value ={this.state.condition_value}
                              placeholder="Enter number" inline/>
                          </FormGroup>
                        </div>

            break;
          case 'Yes/No':
            condition = <div className='condition'>
                          <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Condition</ControlLabel>
                            <FormControl componentClass="select" placeholder="select"
                              onChange={this.update('condition')}
                              value ={this.state.condition} >
                              <option value="">select</option>
                              <option value="Equals">Equals</option>
                            </FormControl>
                            <FormControl componentClass="select" placeholder="select"
                              onChange={this.update('condition_value')}
                              value ={this.state.condition_value} >
                              <option value="">select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </FormControl>
                          </FormGroup>
                        </div>
            break;
          default:
        }
      content =   <form className='form createFormSection'>
                      { condition }
                      { question }
                      { type }
                      { buttons }
                    </form>
    }

      return(
      <div style= {indent}>
        { content }
        { sub_forms }
      </div>
    )
  }
}

export default MainForm;

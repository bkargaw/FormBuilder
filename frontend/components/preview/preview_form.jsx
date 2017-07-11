import React from 'react';
import PF from './preview_form_container';
import {FormGroup, ControlLabel,
        FormControl, Radio} from 'react-bootstrap';

class PreviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" }
  }

  update(field){
    let that = this
    return(e)=>{
      that.setState({[field]: e.target.value})
    }
  }

  render(){
    let indent= {}
    let sub_forms = <ul>
        {this.props.data.sub_form.map((id) => {
          let form = this.props.formsobj[id]
          if (form['formType'] == 'sub'){
            return (
              <li key={form.id}>
                  <PF data={form}
                      parentAnswer={this.state.answer}/>

              </li>
              )
          }
            })
        }
    </ul>
    let question = this.props.data.question
    let type = this.props.data.type
    let content;

    let boolean = <FormGroup>
                    <Radio onChange={this.update('answer')}
                            name="radioGroup" value='Yes' inline>Yes</Radio>{' '}
                    <Radio onChange={this.update('answer')}
                            name="radioGroup" value='No'inline>No</Radio>{' '}
                  </FormGroup>

    let number = <FormGroup
                     id="formControlsText">
                    <FormControl
                      onChange={this.update('answer')}
                      type="number"
                      placeholder="Enter number" inline/>
                  </FormGroup>

    let text = <FormGroup
                     id="formControlsText">
                    <FormControl
                      onChange={this.update('answer')}
                      type="text"
                      placeholder="Enter text" inline/>
                  </FormGroup>

      let input;
      switch (type) {
        case 'Text':
          input = text
        break;
        case 'Number':
          input = number
        break;
        case 'Yes/No':
          input = boolean
          break;
        default:
      }


    if (this.props.data.formType == 'head'){
      content = <form className= 'form'>
                  {question}
                  {input}
                </form>

    }else{
      indent = {marginLeft: "50px"}
      let parentAnswer = this.props.parentAnswer;
      let condition = this.props.data.condition;
      let condition_value = this.props.data.condition_value;
      let parent_type = this.props.formsobj[this.props.data.parentId].type
      let display_child = false;
      switch (parent_type) {
        case 'Text':
          if (parentAnswer && condition_value &&
              parentAnswer.toLowerCase() == condition_value.toLowerCase()){
            display_child = true;
          }
        break;
        case 'Number':
          switch (condition) {
            case "Greater than":
              if (parentAnswer && condition_value
                  && parentAnswer > condition_value) display_child = true;
              break;
            case "Less than":
              if (parentAnswer && condition_value
                  && parentAnswer < condition_value) display_child = true;
              break;
            case 'Equals':
              if (parentAnswer && condition_value
                  && parentAnswer == condition_value) display_child = true;
              break;
            default:

          }
        break;
        case 'Yes/No':
          if (parentAnswer && condition_value
              && parentAnswer== condition_value) display_child = true;
          break;
        default:
      }
      if (display_child){
        content = <form className= 'form'>
                  {question}
                  {input}
                </form>
      }
    }

    return(
      <div style={indent}>
        {content}
        {sub_forms}
      </div>
    )
  }
}

export default PreviewForm;

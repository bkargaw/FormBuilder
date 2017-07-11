import React from 'react'
import {FormGroup, ControlLabel,
        FormControl} from 'react-bootstrap';

class Export extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let forms = JSON.stringify(this.props.formsobj)
    window.localStorage.setItem('forms', forms)
    return(
      <div className='export'>
        <FormGroup controlId="formControlsTextarea">
          <FormControl  componentClass="textarea" value = {forms}
                        placeholder="textarea" readOnly/>
        </FormGroup>
      </div>
    )
  }
}

export default Export;

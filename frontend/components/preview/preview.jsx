import React from 'react'
import PreviewForm from './preview_form_container'

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let main_forms = <ul>
        {this.props.forms.map((el) => {
          if (el['formType'] == 'head'){
            return (
              <li key={el.id}><PreviewForm data={el}/></li>
              )
          }
            })
        }
    </ul>

    return(
      <div>
        {main_forms}
      </div>
    )
  }
}

export default Preview;

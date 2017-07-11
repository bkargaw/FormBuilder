import React from 'react';
import {Button} from 'react-bootstrap'
import {hashHistory} from 'react-router'

class spalshPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <div className='splashPage'>
        <Button onClick={()=> hashHistory.push('/create') }>Get Started</Button>

      </div>
    );
  }
}

  export default spalshPage;

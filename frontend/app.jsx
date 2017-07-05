import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Create from './components/create/create_container';
import Preview from './components/preview/preview_container';
import Export from './components/export/export_container';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={key: 1}
  }

  handleSelect(key) {
   this.setState({key});
 }

  render(){
    return (
      <div>
        <Tabs onSelect={this.handleSelect} defaultActiveKey={this.state.key}>
          <Tab eventKey={1} title="Create"><Create /></Tab>
          <Tab eventKey={2} title="Preview"><Preview /></Tab>
          <Tab eventKey={3} title="Export"><Export /></Tab>
        </Tabs>
      </div>
    )
  }
}

export default App;

import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Create from './components/create/create_container';
import Preview from './components/preview/preview_container';
import Export from './components/export/export_container';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={tab: 1}
  }

  handleSelect(tab) {
   this.setState({tab});
 }

  render(){
    return (
      <div>
        <header className= 'header'>Form Builder</header>
        <article className = 'mainContaint'>
          <Tabs onSelect={this.handleSelect} defaultActiveKey={this.state.tab} id="mainTab">
            <Tab eventKey={1} title="Create"><Create tab={this.state.tab}/></Tab>
            <Tab eventKey={2} title="Preview"><Preview tab={this.state.tab} /></Tab>
            <Tab eventKey={3} title="Export"><Export tab={this.state.tab}/></Tab>
          </Tabs>
        </article>
      </div>
    )
  }
}

export default App;

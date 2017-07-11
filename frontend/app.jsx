import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {hashHistory} from 'react-router';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={tab: 'create'}

  }

  chagePath(tab) {
    hashHistory.push(`/${tab}`)
 }

  render(){

    let children = this.props.children;
    return (
      <div>
        <header className= 'header'>Form Builder</header>
          <Tabs onSelect={this.chagePath}
            defaultActiveKey={'none'} id="mainTab">
            <Tab eventKey={'create'} title="Create"></Tab>
            <Tab eventKey={'preview'} title="Preview"></Tab>
            <Tab eventKey={'export'} title="Export"></Tab>
          </Tabs>
        <article className = 'mainContaint'>
          {children}
        </article>
      </div>
    )
  }
}

export default App;

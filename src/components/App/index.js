import React, { Component } from 'react';
import NewMessageTypeFormContainer from './../../containers/NewMessageTypeFormContainer';
import MessageTypesListContainer from './../../containers/MessageTypesListContainer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <MessageTypesListContainer />
        <NewMessageTypeFormContainer />
      </div>
    );
  }
}

export default App;

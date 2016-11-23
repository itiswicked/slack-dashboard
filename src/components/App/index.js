import React, { Component } from 'react';
import NewMessageTypeFormContainer from './../../containers/NewMessageTypeFormContainer';
import MessageTypesListContainer from './../../containers/MessageTypesListContainer';


class App extends Component {

  render() {
    return (
      <div>
        <NewMessageTypeFormContainer />
        <MessageTypesListContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import MessageListContainer from './../MessageList/MessageListContainer';
import NewMessageFormContainer from './../NewMessageForm/NewMessageFormContainer';


class App extends Component {

  render() {
    return (
      <div>
        <MessageListContainer />
        <NewMessageFormContainer />
      </div>
    );
  }
}

export default App;

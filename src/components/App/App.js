import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from './../../assets/colors'
import MessageListContainer from './../MessageList/MessageListContainer';
import NewMessageFormContainer from './../NewMessageForm/NewMessageFormContainer';

const MessagesSection = styled.div`
  height: 100vh;
  width: 600px;
  position: relative;
  padding: 20px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <MessagesSection>
        <MessageListContainer />
        <NewMessageFormContainer />
      </MessagesSection>
    );
  }
}

export default App;

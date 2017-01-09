import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import MessageContainer from './../Message/MessageContainer'

const MessageList = styled.section`
  margin: 0 auto;
`;

const MessageListContainer = props => {
  let messageComps = props.messages.map(message => {
    return <MessageContainer key={message.id} id={message.id} />
  });
  return (
    <div>
      {messageComps}
    </div>
  )
};

let mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages.items.filter(message => message.typeId === ownProps.id)
  }
}

export default connect(
  mapStateToProps
)(MessageListContainer);

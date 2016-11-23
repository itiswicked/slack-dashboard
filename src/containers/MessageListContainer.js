import React from 'react';
import { connect } from 'react-redux';

import MessageContainer from './MessageContainer'

const MessageListContainer = props => {
  let messageComps = props.messages.map(message => {
    return <MessageContainer key={message.id} {...message} />
  });
  return(
    <div>
      {messageComps}
    </div>
  )
};

let mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    messages: state.messages.items.filter(message => message.typeId === ownProps.id)
  }
}

export default connect(
  mapStateToProps
)(MessageListContainer);

import React from 'react';
import MessageFormContainer from './../../containers/MessageFormContainer';
import MessageListContainer from './../../containers/MessageListContainer';

const MessageType = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <MessageListContainer id={props.id} />
      <MessageFormContainer
        form={props.id.toString()}
        initialValues={{typeId: props.id, team: 'online'}}
      />
    </div>
  );
}

export default MessageType;

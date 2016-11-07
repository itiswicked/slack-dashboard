import React from 'react';

const MessageType = props => {
  console.log(props);
  return <li>{props.name}</li>;
}

export default MessageType;

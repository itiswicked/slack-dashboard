import React from 'react';
import { Field } from 'redux-form';

const Message = props => {
  return (
    <div>
      For: {props.team}
      <br />
      Message: {props.message}
      <br />
    </div>
  );
};

export default Message;

import React from 'react';

const Message = props => {
  console.log(props.toggleFormActive);
  return (
    <div>
      For: {props.team}
      <br />
      Message: {props.message}
      <br />
      Form active? {props.formActive ? 'true' : 'false'}
      <button onClick={props.toggleFormActive}>Toggle Form</button>
    </div>
  );
};

export default Message;

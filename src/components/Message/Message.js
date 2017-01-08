import React from 'react';

const Message = props => {
  let { message, selectedTeam, formActive, toggleFormActive } = props;

  let messageDisplay;
  if(formActive) {
    messageDisplay = <div>Form active!</div>;
  } else {
    messageDisplay = <div>
      Team: {selectedTeam.name}
      <br />
      Message: {message.body}
      <br />
    </div>;
  }
  return (
    <div onClick={toggleFormActive}>
      { messageDisplay }
    </div>
  );
};

export default Message;

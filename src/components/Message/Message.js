import React from 'react';

import SendButton from './../SendButton/SendButton';
import CloseButton from './../CloseButton/CloseButton';
import Panel from './../../assets/components/Panel';
import MessageFormFields from './../MessageFormFields/MessageFormFields';

const Message = props => {
  console.log(props.body);
  let { message, selectedTeam, formActive, activateForm } = props;

  let displayMessageOrForm;
  if(formActive) {
    displayMessageOrForm = <div>
      <MessageFormFields {...props} />
      <CloseButton onClick={props.deactivateForm} />
    </div>
  } else {
    displayMessageOrForm = <div>
      Team: {selectedTeam.name}
      <br />
      Message: {message.body}
      <br />
    </div>;
  }
  return (
    <Panel>
      <div onClick={activateForm}>
        { displayMessageOrForm }
      </div>
      <SendButton primary />
    </Panel>
  );
};

export default Message;

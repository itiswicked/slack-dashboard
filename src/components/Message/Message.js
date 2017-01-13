import React from 'react';
import Box from 'react-layout-components'

import SendButton from './../SendButton/SendButton';
import CloseButton from './../CloseButton/CloseButton';
import SaveButton from './../SaveButton/SaveButton';
import TrashButton from './../TrashButton/TrashButton';

import Panel from './../../assets/components/Panel';
import MessageFormFields from './../MessageFormFields/MessageFormFields';

const Message = props => {
  let { message, selectedTeam, formActive, activateForm } = props;

  let messageOrFormFields;
  if(formActive) {
    messageOrFormFields = <Box flex={4}>
      <Box flex={4}>
        <MessageFormFields {...props} />
      </Box>
      <Box flex={1} alignItems="flex-start">
        <CloseButton noBorder onClick={props.deactivateForm} />
        <SaveButton noBorder onClick={props.updateMessage} />
      </Box>
    </Box>
  } else {
    messageOrFormFields = <Box flex={4} column onClick={activateForm} justifyContent="space-around">
      <Box justifyContent="space-between">
        <h4>Message</h4>
        <h4>Team: {selectedTeam.name}</h4>
      </Box>
      <Box>{message.body}</Box>
    </Box>
  }

  let trashButton;
  let justifyContent = "flex-end"
  let flexSize = 0.5
  if(!props.formActive) {
    trashButton = <TrashButton noBorder primary />
    justifyContent= "flex-end"
    let flexSize = 1.1
  }
  return (
    <Panel>
      <Box>
        { messageOrFormFields }
        <Box flex={flexSize} justifyContent={justifyContent} alignItems="flex-start">
          { trashButton }
          <SendButton primary/>
        </Box>
      </Box>
    </Panel>
  );
};

export default Message;

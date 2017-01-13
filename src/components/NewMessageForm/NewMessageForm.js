import React from 'react';
import Box from 'react-layout-components'

import MessageFormFields from './../MessageFormFields/MessageFormFields'
import SaveButton from './../SaveButton/SaveButton'

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h3 style={{marginTop: 0, marginBottom: 0}}>New Message</h3>
      <Box>
        <MessageFormFields {...props} />
        <Box flex={0.5} justifyContent="center" alignItems="flex-start">
          <SaveButton noBorder primary/>
        </Box>
      </Box>
    </form>
  )
};

export default NewMessageForm;

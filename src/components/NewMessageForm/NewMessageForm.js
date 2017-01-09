import React from 'react';
import MessageFormFields from './../MessageFormFields/MessageFormFields'

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <h3 style={{marginTop: 0, marginBottom: 0}}>New Message</h3>
      <MessageFormFields {...props} />
      <button type="submit">Save</button>
    </form>
  )
};

export default NewMessageForm;

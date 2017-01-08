import React from 'react';
import MessageFormFields from './../MessageFormFields/MessageFormFields'

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <p>New Message</p>
      <MessageFormFields {...props} />
      <button type="submit">Save</button>
    </form>
  )
};

export default NewMessageForm;

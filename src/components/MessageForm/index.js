import React from 'react';
import { Field } from 'redux-form';

const MessageForm = ({ handleSubmit, typeId }) => {
  let id =  <Field name="typeId" component="input" type="text" />;
  return (
    <form onSubmit={handleSubmit}>
      <p>New Message</p>
      <label>Team</label>
      <Field name="team" component="select">
        <option value="online">Online</option>
        <option value="ignition-1">Ignition 1</option>
        <option value="ignition-2">Ignition 2</option>
      </Field>
      <label>Message</label>
      <Field name="message" component="input" type="text" />
      <button type="submit">Save</button>
    </form>
  )
};

export default MessageForm;

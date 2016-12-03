import React from 'react';
import { Field } from 'redux-form';

const Message = props => {

  let { text, formActive } = props;
  console.log(text);
  let textInput = <input type="text" value={text} onChange={props.handleTextChange}/>
  return (
    <div>
      <form>
        For: {props.team}
        <br />
        Message: { formActive ? textInput : text}
        <br />
      </form>
    </div>
  );
};

export default Message;

import React from 'react';
import Button from './../../assets/components/Button';

const SendButton = props => {
  let iconSize = 'fa-2x';
  if(props.large) { iconSize = 'fa-4x' }
  if(props.xlarge) { iconSize = 'fa-5x' }
  return (
    <Button {...props}>
      <i className={`fa fa-paper-plane-o ${iconSize}`} aria-hidden="true"></i>
    </Button>
  )
}

export default SendButton;

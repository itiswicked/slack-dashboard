import React from 'react';
import Button from './../../assets/components/Button';

const SaveButton = props => {
  let iconSize = 'fa-2x';
  if(props.large) { iconSize = 'fa-4x' }
  if(props.xlarge) { iconSize = 'fa-5x' }
  return (
    <Button {...props}>
      <i className={`fa fa-check ${iconSize}`} aria-hidden="true"></i>
    </Button>
  )
}

export default SaveButton;

import React from 'react';
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize';

export default styled(Textarea)`
  font-family: inherit;
  font-size: inherit;
  font-weight: 200;
  background-color: #3f85b2;
  border: none;
  padding: 3px 8px;
  min-height: 22px;
  border-radius: 5px;
  color: #eee
  resize: none;
`;

import React from 'react';
import styled from 'styled-components';

import { selectColor, selectDarkColor } from '../colors';

export default const Button = styled.button`
  background-color: ${props => props.primary ? selectColor(props) : 'white'};
  color: ${props => props.primary ? 'white' : selectColor(props)};
  padding: 8px;
  margin: 8px;
  border: 2px solid ${props => selectColor(props)};
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.primary ? selectDarkColor(props) : 'white'};
    color: ${props => props.primary ? 'white' : selectDarkColor(props)};
    border: 2px solid ${props => selectDarkColor(props)};
  }
`

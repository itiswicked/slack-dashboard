import styled from 'styled-components';

import { selectColor, selectDarkColor, colors } from '../colors';

const Button = styled.button`
  background-color: ${colors.darkBlue.hex};
  color: ${colors.blueShadow};
  padding: ${props => props.noBorder ? '4px' : '8px'};;
  margin: ${props => props.noBorder ? '4px' : '8px'};;
  border: ${props => props.noBorder ? 'none' : '2px solid'};
  border-color: ${colors.blueShadow};
  border-radius: 4px;

  &:hover {
    background-color: ${'inherit'};
    color: ${'#eee'};
    border: ${props => props.noBorder ? 'none' : '2px solid'};
  }
`

export default Button;

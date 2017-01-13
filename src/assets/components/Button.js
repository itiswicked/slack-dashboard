import styled from 'styled-components';

import { selectColor, selectDarkColor, colors } from '../colors';

const Button = styled.button`
  background-color: ${colors.darkBlue.hex};
  color: ${colors.blueShadow};
  padding: 8px;
  border: ${props => props.noBorder ? '2px solid transparent' : `2px solid ${colors.blueShadow}`}
  border-radius: 4px;

  &:hover {
    background-color: ${'inherit'};
    color: ${'#eee'};
  }
`

export default Button;
//

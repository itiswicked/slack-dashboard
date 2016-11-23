export const colors = {
  green: '#1fa67a',
  red: '#ff6347',
  blue: '#2199e8',
  yellow: '#ffa500',
  darkGreen: '#157757',
  darkRed: '#c44c36',
  darkBlue: '#17679b',
  darkYellow: '#ce8500'
};


export const selectColor = props => {
  if(props.red) return colors.red;
  if(props.blue) return colors.blue;
  if(props.yellow) return colors.yellow;
  return colors.green;
}

export const selectDarkColor = props => {
  if(props.red) return colors.darkRed;
  if(props.blue) return colors.darkBlue;
  if(props.yellow) return colors.darkYellow;
  return colors.darkGreen;
}

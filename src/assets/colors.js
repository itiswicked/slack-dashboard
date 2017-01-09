export const colors = {
  green: '#1fa67a',
  red: '#ff2600',
  blue: '#2199e8',
  yellow: '#ffa500',
  blueShadow: '#618aa4',
  darkGreen: {hex: '#157757', rgb: 'rgb(21,119,87)' },
  darkRed: {hex: '#c44c36', rgb: 'rgb(196,76,54)'},
  darkBlue: {hex: '#17679b', rgb: 'rgb(23,103,155)' },
  darkYellow: { hex: '#ce8500', rgb: 'rgb(206,133,0)' }
};


export const selectColor = props => {
  if(props.red) return colors.red;
  if(props.blue) return colors.blue;
  if(props.yellow) return colors.yellow;
  if(props.green) return colors.green;
}

export const selectDarkColor = props => {
  if(props.red) return colors.darkRed.hex;
  if(props.blue) return colors.darkBlue.hex;
  if(props.yellow) return colors.darkYellow.hex;
  if(props.green) return colors.darkGreen.hex;
}

export const selectDarkColorRGB = props => {
  if(props.red) return colors.darkRed.rgb;
  if(props.blue) return colors.darkBlue.rgb;
  if(props.yellow) return colors.darkYellow.rgb;
  if(props.green) return colors.darkGreen.rgb;
}

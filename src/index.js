import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { colors } from './assets/colors'
import store from './store'
import App from './components/App/App';

const ThemeWrapper = styled.div`
  background-color: ${colors.darkBlue.hex};
  color: #eee
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 100;

  *:focus {
    outline: none !important
  }
`

ReactDOM.render(
  <Provider store={store()}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>,
  document.getElementById('root')
);

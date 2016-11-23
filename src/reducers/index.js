import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import messageTypes from './messageTypes';
import messages from './messages';

export default combineReducers({
  messageTypes,
  messages,
  form: formReducer
});

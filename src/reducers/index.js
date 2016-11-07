import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import messageTypes from './messageTypes';

export default combineReducers({
  messageTypes,
  form: formReducer
});

import { combineReducers } from 'redux';

import messageTypes from './messageTypes';
import messages from './messages';
import teams from './teams';

export default combineReducers({
  messageTypes,
  messages,
  teams
});

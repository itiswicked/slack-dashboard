import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

const aReducer = (state = null, action) => {
  return state;
}

export default combineReducers({
  form,
  aReducer
});

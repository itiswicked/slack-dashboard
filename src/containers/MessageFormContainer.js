  import { reduxForm, reset } from 'redux-form';

import NewMessageForm from './../components/NewMessageForm';
import { postNewMessage } from './../actions/postNewMessage'

let validate = values => {
  let errors = {};
  return errors;
}

let onSubmit = (values, dispatch) => {
  dispatch(postNewMessage(values));
  dispatch(reset(values.typeId));
}

export default reduxForm({
  form: 'newMessage',
  validate,
  onSubmit
})(NewMessageForm)

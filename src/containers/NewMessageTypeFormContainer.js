import { reduxForm, reset } from 'redux-form';

import NewMessageTypeForm from './../components/NewMessageTypeForm';
import { postNewMessageType }  from './../actions/postNewMessageType';

const validate = values => {
  const errors = {};
  return errors;
}

const onSubmit = (values, dispatch) => {
  dispatch(postNewMessageType(values));
  dispatch(reset('messageType'));
}
export default reduxForm({
  form: 'messageType',
  validate,
  onSubmit
})(NewMessageTypeForm)

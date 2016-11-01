import { reduxForm } from 'redux-form';
import NewMessageTypeForm from './../components/NewMessageTypeForm';

export default reduxForm({
  form: 'messageType'
})(NewMessageTypeForm)

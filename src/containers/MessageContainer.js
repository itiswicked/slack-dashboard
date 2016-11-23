import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { toggleFormActive } from './../actions/message';
import Message from './../components/Message';

const mapStateToProps = (state, ownProps) => {
  return {
   formActive: state.messages.items.find(message => message.formActive)
  }
}

const mapDispatchToProps = (dispatch, { id }) => {
  console.log("mapDispatchToProps");
  return {
    toggleFormActive: () => {
      dispatch(toggleFormActive(id))
    }
  }
}

const MessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Message)

export default reduxForm({
  form: 'message'
})(MessageContainer)

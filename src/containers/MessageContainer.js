import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Message from './../components/Message';

class MessageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      team: this.props.team,
      text: this.props.text
    }
  }

  handleTextChange

  render() {
    return(
      <Message
        {...this.props.message}
        formActive={this.props.formActive}
        {...eventHandlers}
      />
    )
  }
}

const mapStateToProps = (state, { id }) => {
  return {
   formActive: state.messages.activeFormId === id
  };
}

const mapDispatchToProps = (dispatch, { id }) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer)

// function makeid()
// {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//
//     for(var i = 0; i < 5; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//
//     return text;
// }

// let MessageContainer = reduxForm({
//   form: 'message' + makeid()
// })(DecoratedMessage)


// export default connect(
//   (state, ownProps) => {
//     debugger;
//     return {
//       initialValues: {
//         text: grabTextForActiveForm(state, ownProps.id)
//       }
//     }
//   }
// )(MessageContainer)

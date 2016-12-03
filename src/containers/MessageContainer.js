import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Message from './../components/Message';

class MessageContainer extends Component {
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      team: this.props.team,
      text: this.props
    }
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleTeamChange(e) {
    this.setState({team: e.target.value});
  }

  handleSubmit(e) {
    console.log("SUBMITTED!");
  }

  render() {
    let eventHandlers = {
      handleTextChange: this.handleTextChange.bind(this),
      handleTeamChange: this.handleTeamChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this)
    }

    return(
      <Message
        text={this.props.text}
        formActive={this.props.formActive}
        {...eventHandlers}
      />
    )
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    message: state.messages.items.find(message => message.id === id),
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

import React, { Component } from 'react';
import { connect } from 'react-redux';


import Message from './Message';
import { patchMessage } from './../../actions/message'

class MessageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTeam: this.props.teams.find(team => team.id === this.props.message.teamId),
      message: this.props.message,
      formActive: false,
      body: this.props.message.body
    }
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleTeamChange(e) {
    this.setState({team: e.target.value});
  }

  handleSubmit(e) {
    console.log("SUBMITTED TO SLACK!");
  }

  activateForm() {
    if(!this.state.formActive) { // prevent a rerender when unnecessary
      this.setState({formActive: true})
    }
  }

  deactivateForm() {
    this.setState({formActive: false})
  }

  updateMessage() {
    let {selectedTeam, body } = this.state;
    let message = { id: this.props.id, body, teamId: selectedTeam.id }
    this.props.patchMessage(message);
    this.setState({formActive: false});
    this.setState({ message })
  }

  render() {
    let eventHandlers = {
      handleBodyChange: this.handleBodyChange.bind(this),
      handleTeamChange: this.handleTeamChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      activateForm: this.activateForm.bind(this),
      deactivateForm: this.deactivateForm.bind(this),
      updateMessage: this.updateMessage.bind(this)
    }

    let message = this.state.message
    let state = this.state
    return(
      <Message
        teams={this.props.teams}
        {...state}
        {...message}
        {...eventHandlers}
      />

    )
  }
}

const mapStateToProps = (state, { id }) => {
  return {
    message: state.messages.items.find(message => message.id === id),
    teams: state.teams.teams
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    patchMessage: (message) => dispatch(patchMessage(message))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTeam: this.props.teams.find(team => team.id === this.props.message.teamId),
      message: this.props.message,
      formActive: false
    }
  }

  handleBodyChange(e) {
    this.setState({body: e.target.value});
  }

  handleTeamChange(e) {
    this.setState({team: e.target.value});
  }

  handleSubmit(e) {
    console.log("EDIT SUBMITTED!");
  }

  activateForm() {
    if(!this.state.formActive) {
      this.setState({formActive: true})
    }
  }

  deactivateForm() {
    this.setState({formActive: false})
  }

  render() {
    let eventHandlers = {
      handleBodyChange: this.handleBodyChange.bind(this),
      handleTeamChange: this.handleTeamChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      activateForm: this.activateForm.bind(this),
      deactivateForm: this.deactivateForm.bind(this)
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

const mapDispatchToProps = (dispatch, { id }) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageContainer)

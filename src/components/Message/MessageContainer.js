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

  toggleFormActive() {
    this.setState({formActive: !this.state.formActive})
  }

  render() {
    let eventHandlers = {
      handleBodyChange: this.handleBodyChange.bind(this),
      handleTeamChange: this.handleTeamChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this),
      toggleFormActive: this.toggleFormActive.bind(this)
    }

    return(
      <Message
        teams={this.props.teams}
        {...this.state}
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

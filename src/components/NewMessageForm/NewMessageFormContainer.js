import React from 'react';
import { connect } from 'react-redux';

import NewMessageForm from './NewMessageForm';
import { postNewMessage } from './../../actions/message'

class NewMessageFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTeam: this.props.teams[0],
      body: ""
    }
  }

  handleTeamChange(e) {
    // eslint-disable-next-line
    let newTeam = this.props.teams.find(team => team.id === parseInt(e.target.value))
    this.setState({selectedTeam: newTeam})
  }

  handleMessageChange(e){
    this.setState({body: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.body !== "") {
      let teamId = this.state.selectedTeam.id
      this.props.submitMessage(teamId, this.state.body);
      this.setState({body: ""})
    }
  }

  render() {
    let eventHandlers = {
      handleTeamChange: this.handleTeamChange.bind(this),
      handleMessageChange: this.handleMessageChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this)
    }
    return(
      <NewMessageForm
        teams={this.props.teams}
        {...eventHandlers}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    teams: state.teams.teams
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitMessage: (teamId, body) => dispatch(postNewMessage(teamId, body))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageFormContainer);

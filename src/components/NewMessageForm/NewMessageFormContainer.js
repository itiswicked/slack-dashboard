import React from 'react';
import { connect } from 'react-redux';

import NewMessageForm from './NewMessageForm';
import { postNewMessage } from './../../actions/message'
import Panel from './../../assets/components/Panel'


class NewMessageFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTeam: this.props.teams[0],
      body: null
    }
  }

  handleTeamChange(e) {
    // eslint-disable-next-line
    let newTeam = this.props.teams.find(team => team.id === parseInt(e.target.value))
    this.setState({selectedTeam: newTeam})
  }

  handleBodyChange(e){
    this.setState({body: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    if(this.state.body !== "") {
      console.log();
      let teamId = this.state.selectedTeam.id
      this.props.submitMessage(teamId, this.state.body);
      this.setState({body: ""})
    }
  }

  render() {
    let eventHandlers = {
      handleTeamChange: this.handleTeamChange.bind(this),
      handleBodyChange: this.handleBodyChange.bind(this),
      handleSubmit: this.handleSubmit.bind(this)
    }
    return(
      <Panel>
        <NewMessageForm
          teams={this.props.teams}
          {...eventHandlers}
          {...this.state}
        />
      </Panel>
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

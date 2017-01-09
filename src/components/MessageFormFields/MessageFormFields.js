import React from 'react';

const MessageFormFields = props => {
  let { selectedTeam, teams } = props;
  let filteredTeams = teams.filter(team => team.id !== selectedTeam.id);
  let newlyOrderedTeams = [ selectedTeam, ...filteredTeams ]
   const options = newlyOrderedTeams.map(team => {
    return <option key={team.id} value={team.id}>{team.name}</option>
  })

  return (
    <div>
      <label>Team</label>
      <select onChange={props.handleTeamChange}>
        { options }
      </select>
      <label>Message</label>
      <textarea value={props.body} onChange={props.handleBodyChange}/>
    </div>
  )
};

export default MessageFormFields;

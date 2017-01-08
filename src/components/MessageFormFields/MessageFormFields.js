import React from 'react';

const MessageFormFields = props => {
  const options = props.teams.map(team => {
    return <option key={team.id} value={team.id}>{team.name}</option>
  })
  return (
    <div>
      <label>Team</label>
      <select onChange={props.handleTeamChange}>
        { options }
      </select>
      <label>Message</label>
      <input type="text" value={props.body} onChange={props.handleMessageChange}/>
    </div>
  )
};

export default MessageFormFields;

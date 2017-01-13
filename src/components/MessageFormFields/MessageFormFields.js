import React from 'react';
import Box from 'react-layout-components'

import TextBox from './../../assets/components/TextBox';
import Select from './../../assets/components/Select';

const MessageFormFields = props => {
  let { selectedTeam, teams } = props;
  let filteredTeams = teams.filter(team => team.id !== selectedTeam.id);
  let newlyOrderedTeams = [ selectedTeam, ...filteredTeams ]

  const options = newlyOrderedTeams.map(team => {
    return <option key={team.id} value={team.id}>{team.name}</option>
  })

  return (
    <Box flex={4} column justifyContent="flex-end">
      <Box justifyContent="space-between">
        <div><h4>Message</h4></div>
        <Box>
          <h4>Team</h4>
          <Select onChange={props.handleTeamChange}>
            { options }
          </Select>
        </Box>
      </Box>
      <TextBox onChange={props.handleBodyChange}>
        {props.body}
      </TextBox>
    </Box>
  )
};

export default MessageFormFields;

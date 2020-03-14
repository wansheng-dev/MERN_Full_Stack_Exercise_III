import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import PlayerForm from '../components/PlayerForm';

const AddPlayer = () => {

  const NavLink2 = props => (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            'font-weight': isCurrent ? "bold" : ""
          }
        };
      }}
    />
  );

  const sendApiRequest = (data) => {
    return axios.post('http://localhost:1337/api/players/create', data);
  }

  return (
    <>
      <NavLink2 to = '/players/list'> List </NavLink2> { ' | ' }
      <NavLink2 to = '/players/addplayer'> Add Player </NavLink2> 
      <h3>Add Player</h3>
      <PlayerForm
        initialValues = {{
          name: '',
          position: ''
        }}
        sendApiRequest = { sendApiRequest }
      />
    </>
  )
}

export default AddPlayer;
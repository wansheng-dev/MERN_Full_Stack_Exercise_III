import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

const ListPlayer = () => {
  const [ playersState, setPlayersState] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:1337/api/players')
      .then(response => setPlayersState(response.data))
      .catch(console.log);
  }, []);

  const handleAlert = id => {
    var res = window.confirm('Are you sure you want to remove ' + playersState.name + '?')
    if (res === true ){
      handleDelete(id);
    }
  }

  const handleDelete = id => {
    axios.delete('http://localhost:1337/api/players/delete/' + id)
      .then(() => {
        const newPlayers = playersState.filter(player => player._id !== id);
        setPlayersState(newPlayers);
      })
      .catch(console.log);
  }

  return (
    <>
      <div>
        <Link to = '/players/list'> List </Link> { ' | ' }
        <Link to = '/players/addplayer'> Add Player </Link> 
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Preferred Postion</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { playersState.map(player => (
                <tr key = { player._id }>
                <td> { player.name } </td>
                <td> { player.position } </td>
                <td>
                  <Button onClick = {() => handleAlert(player._id)}> Delete </Button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListPlayer;
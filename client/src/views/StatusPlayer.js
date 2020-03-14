import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


const StatusPlayer = () => {
  
  const [ playersState, setPlayersState] = useState([]);

  const buttonStyle = g1 => {
    if (g1 === "Playing"){
      return 'green';
    }
    if (g1 === 'Not Playing'){
      return 'red';
    }
    return 'yellow'
  }

  const NavLink3 = props => (
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

  useEffect (() => {
    axios.get('http://localhost:1337/api/players')
      .then(response => setPlayersState(response.data))
      .catch(console.log);
  }, []);

  const playing = (id) => {
    axios.patch('http://localhost:1337/api/players/update/' + id, {'g1': 'Playing'}) // how to do a patch request
      .then(() => navigate('/status/game/1'))
      .catch(console.log)
  }


  const notPlaying = id => {
    axios.patch('http://localhost:1337/api/players/update/' + id, {'g2': 'Not Playing'}) // how to do a patch request
      .then(() => navigate('/status/game/1'))
      .catch(console.log)
  }

  const undecided = id => {
    axios.patch('http://localhost:1337/api/players/update/' + id, {'g1': 'Undecided'}) // how to do a patch request
      .then(() => navigate('/status/game/1'))
      .catch(console.log)
  }

  return (
    <>
      <div>
        <NavLink3 to = '/status/game/1'> Game 1 </NavLink3>
        <NavLink3 to = '/status/game/2'> Game 2 </NavLink3>
        <NavLink3 to = '/status/game/3'> Game 2 </NavLink3>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { playersState.map(player => (
                <tr key = { player._id }>
                <td> { player.name } </td>
                <td>
                  <button style = {() => buttonStyle(player.g1)} onClick = {() => playing(player._id)}> Playing </button> {' '}
                  <button style = {() => buttonStyle(player.g1)} onClick = {() => notPlaying(player._id)}> Not Playing </button> {' '}
                  <button style = {() => buttonStyle(player.g1)} onClick = {() => undecided(player._id)}> Undecided </button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StatusPlayer;
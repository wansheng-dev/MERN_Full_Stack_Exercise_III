import React from 'react';
import { Router, Link, Redirect } from '@reach/router';
import ListPlayer from './views/ListPlayer';
import AddPlayer from './views/AddPlayer';
import StatusPlayer from './views/StatusPlayer';

function App() {
  
  const NavLink = props => (
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

  return (
    <div className="App">
      <NavLink to = '/players/list'> Manage Players </NavLink> {' | '}
      <NavLink to = '/status/game/1'> Manage Player Statuts </NavLink>
      <Router>
        <Redirect from = '/' to = 'players/list' noThrow/>
        <ListPlayer path = 'players/list'/>
        <AddPlayer path = 'players/addplayer'/>
        {/* <StatusPlayer path = 'status/game/1'/> */}
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink
        to="/"
        exact

        activeStyle={{background: 'darkblue'}}
      >Home</NavLink>
    <NavLink
      to="/movies"
      exact

      activeStyle={{
        background: 'darkblue'
      }}
      >Movies</NavLink>
    <NavLink
      to="/actors"
      exact

      activeStyle={{
        background: 'darkblue'
      }}
      >Actors</NavLink>
    <NavLink
      to="/directors"
      exact

      activeStyle={{
        background: 'darkblue'
      }}
      >Directors</NavLink>
    </div>
  );
};

export default NavBar;

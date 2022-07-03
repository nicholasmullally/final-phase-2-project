import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/wharf">Fisherman's Wharf</NavLink>
      <NavLink to="/ggpark">Golden Gate Park</NavLink>
      <NavLink to="/shopping">Financial District</NavLink>
      <NavLink to="/alcatraz">Alcatraz</NavLink>
    </div>
  );
}
export default NavBar;
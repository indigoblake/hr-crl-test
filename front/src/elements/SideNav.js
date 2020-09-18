import { NavLink } from 'react-router-dom'
import React from 'react';

const SideMenu = () => {
    return (
      <aside className="menu">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/entries">Entries</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>          
        </ul>     
      </aside>        
    );
}

export default SideMenu;
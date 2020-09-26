import { NavLink } from 'react-router-dom'
import React from 'react';

export const SideNav = () => {
  return (
    <aside className="menu">
      <p className="menu-label">
        General
        </p>
      <ul className="menu-list">
        <li>
          <NavLink to="/admin">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Entries</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Profile</NavLink>
        </li>
      </ul>
    </aside>
  );
}
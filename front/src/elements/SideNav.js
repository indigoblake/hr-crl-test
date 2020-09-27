import { NavLink } from 'react-router-dom'
import React from 'react';

export const SideNav = () => {
  return (
    <aside className="menu">
      <figure className="image is-128x128">
        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
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
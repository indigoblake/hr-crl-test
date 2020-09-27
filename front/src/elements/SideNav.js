import { NavLink } from 'react-router-dom'
import React from 'react';

export const SideNav = () => {
  return (
    <aside className="menu mt-4">
      <p className="menu-label">
        General
      </p>
      <ul className="menu-list">
        <li>
          <NavLink to="/admin" className="is-active">
            <span class="icon pr-2">
              <i class="fas fa-columns"></i>
            </span>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin">
            <span class="icon pr-2">
              <i class="fas fa-list-ul"></i>
            </span>
            Entries
          </NavLink>
          <ul>
            <li><NavLink to="/admin">Level 2 item</NavLink></li>
            <li><NavLink to="/admin">Level 2 item</NavLink></li>
          </ul>
        </li>
        <li>
          <NavLink to="/admin">
            <span class="icon pr-2">
              <i class="fas fa-id-badge"></i>
            </span>
            Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
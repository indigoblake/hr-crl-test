import { NavLink } from 'react-router-dom'
import React from 'react';

const SideMenu = () => {
    return (
      <div className="box h-100">
        <aside className="menu">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
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
            <li>
              <button class="button">Button</button>
            </li>
          </ul>
        </aside>
      </div>
    );
}

export default SideMenu;
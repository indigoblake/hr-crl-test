import { NavLink } from 'react-router-dom'
import React from 'react';

export const MainNav = () => {
  return (
    <div className="container is-fluid">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <p className="title is-4">Title 1</p>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>

            <a className="navbar-item">
              Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <span className="icon is-medium">
                <i className="far fa-bell fa-lg"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
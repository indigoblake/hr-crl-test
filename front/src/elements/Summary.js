import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

export const Summary = () => {
  const { users } = useContext(UserContext);
  return (
    <div className="box">
      <nav className="level">
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Employees</p>
            <p className="title">0</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Contractor Businesses</p>
            <p className="title">0</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Not synced users</p>
            <p className="title">{ users.length }</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Likes</p>
            <p className="title">789</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { UsersTable } from './UsersTable'

export const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <p class="title is-3">
          Entries
      </p>
      <p class="subtitle is-5">
          Sample data from third party source
      </p>
      <div className="box">
        <UsersTable users={ users } />
      </div>
    </>
  );
}
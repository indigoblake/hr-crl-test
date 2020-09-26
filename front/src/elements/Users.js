import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { UsersTable } from './UsersTable'

export const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <p className="title is-3">
          Entries
      </p>
      <p className="subtitle is-5">
          Sample data from third party source
      </p>
      <div className="box">
        <UsersTable users={ users } />
      </div>
    </>
  );
}
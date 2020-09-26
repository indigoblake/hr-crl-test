import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([])

  const updateUsers = (users) => {
    setUsers(users);
  }

  return (
    <UserContext.Provider value={{ users, updateUsers }}>
      { props.children }
    </UserContext.Provider>
  );
}
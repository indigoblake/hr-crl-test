import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
  const [users, setUsers] = useState([
    {id: 1, name: 'J', email: 'fsdfs@gmail.com'}
  ])

  return (
    <UserContext.Provider value={{ users }}>
      { props.children }
    </UserContext.Provider>
  );
}
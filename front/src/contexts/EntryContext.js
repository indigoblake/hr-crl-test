import React, { useState, createContext } from 'react'

export const EntryContext = createContext();

export const EntryContextProvider = (props) => {
  const [entries, setEntries] = useState([]);

  const updateEntries = (entries) => {
    setEntries(entries);
  }

  return (
    <EntryContext.Provider value={{ entries, updateEntries }}>
      { props.children }
    </EntryContext.Provider>
  );
}
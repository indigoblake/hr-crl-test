import React, { useState, createContext } from 'react'

export const EmployeeContext = createContext()

export const EmployeeContextProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const updateEmployees = (employees) => {
    setEmployees(employees)
  }

  return (
    <EmployeeContext.Provider value={{ employees, updateEmployees }}>
      { props.children }
    </EmployeeContext.Provider>
  );
}
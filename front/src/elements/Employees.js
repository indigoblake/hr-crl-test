import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { EmployeesTable } from './EmployeesTable'

export const Employees = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <>
      <p className="title is-3">
          Employees
      </p>
      <p className="subtitle is-5">
          Sample data from third party source
      </p>
      <div className="box">
        <EmployeesTable employees={ employees } />
      </div>
    </>
  );
}
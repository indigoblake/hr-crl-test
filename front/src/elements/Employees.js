import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext'
import { EmployeesTable } from './EmployeesTable'

export const Employees = () => {
  const { employees, updateEmployees } = useContext(EmployeeContext)
  const handleEmployeeAdd = (name, email, company) => {
    fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, company}),
    })
    .then(res => res.json())
    .then(res => updateEmployeeContext(employees, res),
      (error) => {}
    )
  }

  const updateEmployeeContext = (employees, res) => {
    let newEmployeesList = [];
    employees.forEach(employee => {
      if (employee.name === res.name)
        employee.isSynced = true
      newEmployeesList.push(employee)
    });
    updateEmployees([...newEmployeesList]);
  }

  return (
    <>
      <div className="block mt-5 mb-4">
        <p className="title is-4">
            Employees
        </p>
        <p className="subtitle is-5">
            Sample data from third party source
        </p>
      </div>
      <div className="box">
        <EmployeesTable employees={ employees } handleEmployeeAdd={ handleEmployeeAdd }/>
      </div>
    </>
  );
}
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



  // const handleEmployeeAdd = (employeeId) => {
  //   const requestOptions = {
  //       method: 'POST',
  //       mode: 'no-cors', // no-cors, *cors, same-origin
  //       //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       //credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({name: 'hallo!!!!!!', email: 'fsfsdf', company: 'fsdfsdffsdf'})
  //   };
  //   fetch('http://localhost:5000/api/employees', requestOptions)
  //     .then(res => console.log(res))
  //     .then(res => res.json())
  //     .then(result => {
  //         console.log(result)
  //         updateEmployees(result);
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {}
  //     )
  // }


  return (
    <>
      <p className="title is-3">
          Employees
      </p>
      <p className="subtitle is-5">
          Sample data from third party source
      </p>
      <div className="box">
        <EmployeesTable employees={ employees } handleEmployeeAdd={ handleEmployeeAdd }/>
      </div>
    </>
  );
}
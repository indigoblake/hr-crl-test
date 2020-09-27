import React, { useEffect, useContext } from 'react'
import { Summary } from '../../elements/Summary'
import { Employees } from '../../elements/Employees'
import { EmployeeContext } from '../../contexts/EmployeeContext'
import { Entries } from '../../elements/Entries'

export const Dashboard = () => {
  const { updateEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    fetch('http://localhost:5000/api/employees/merged')
      .then(res => res.json())
      .then(result => {
        console.log(result)
        updateEmployeeContext(result)
      },
        (error) => {}
      )
  }, [])

  const updateEmployeeContext = (result) => {
    updateEmployees(result);
  }
  return (
    <>
      <section className="mb-2 hero">
        <div className="hero-body px-0">
          <div className="container">
            <h1 className="title">
              Dashboard
            </h1>
            <h2 className="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>
      <Entries />
      <Summary />
      <Employees />
    </>
  );
}

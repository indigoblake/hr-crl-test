import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext';

export const Summary = () => {
  const { employees } = useContext(EmployeeContext)
  let syncedEmployees = [];
  let totalCompanies = [];
  let syncedCompanies = [];

  employees.map(employee => {
    if (employee.isSynced)
      syncedEmployees.push(employee)
  });

  employees.map(employee => {
    totalCompanies.push(employee.company)
    if (employee.isSynced)
      syncedCompanies.push(employee.company)
  })

  const uniqueSyncedCompaniesSet = new Set(syncedCompanies);
  const uniqueTotalCompaniesSet = new Set(totalCompanies);
  syncedCompanies = [...uniqueSyncedCompaniesSet];
  totalCompanies = [...uniqueTotalCompaniesSet];

  return (
    <div className="columns">
      <div className="column">
        <div className="box is-gradient-main has-text-white">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <span className="icon is-large">
                <i className="fas fa-user fa-3x"></i>
              </span>
            </div>
            <div className="column">
              <p className="heading">Synced employees</p>
              <p className="title has-text-white">{ syncedEmployees.length }</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="box has-text-white is-gradient-main ">
          <div className="columns is-vcentered">
              <div className="column is-narrow">
                <span className="icon is-large">
                  <i className="fas fa-building fa-3x"></i>
                </span>
              </div>
              <div className="column">
                <p className="heading">Synced Companies</p>
                <p className="title has-text-white">{ syncedCompanies.length }</p>
              </div>
            </div>
        </div>
      </div>
      <div className="column">
        <div className="box is-decorate-border-primary">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <span className="icon is-large">
                <i className="far fa-user fa-3x has-text-primary"></i>
              </span>
            </div>
            <div className="column">
              <p className="heading">Employees (total)</p>
              <p className="title">{ employees.length }</p>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="box is-decorate-border-primary">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <span className="icon is-large">
                <i className="far fa-building fa-3x has-text-primary"></i>
              </span>
            </div>
            <div className="column">
              <p className="heading">Companies (total)</p>
              <p className="title">{ totalCompanies.length }</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
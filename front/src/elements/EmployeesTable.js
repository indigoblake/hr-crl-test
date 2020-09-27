import React from 'react'
import { StatusIndicator } from './StatusIndicator'

export const EmployeesTable = ({employees}) => {
  return (
    <table className="table w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contractor Businesses</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => {
          return (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.company}</td>
              <td>{employee.isSynced ? <StatusIndicator type="synced" /> : <StatusIndicator type="notSynced" />}</td>
              <td className="has-text-right">
                <button className="button is-small is-primary">
                  <span>Sync entry</span>
                  <span className="icon is-small">
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
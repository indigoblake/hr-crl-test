import React, { useContext } from 'react'
import { EmployeeContext } from '../contexts/EmployeeContext';

export const Summary = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <div className="columns">
      <div className="column">
        <div className="box is-gradient-main has-text-white">
          <div className="columns">
            <div className="column">
              <p className="heading">Employees</p>
              <p className="title has-text-white">0</p>
            </div>
            <div className="column has-text-right">
              <span class="icon">
                <i class="fas fa-spinner fa-pulse"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="box is-gradient-main has-text-white">
          <p className="heading">Contractor Businesses</p>
          <p className="title has-text-white">0</p>
        </div>
      </div>
      <div className="column">
        <div className="box is-gradient-main has-text-white">
          <p className="heading">Not Synced employees</p>
          <p className="title has-text-white">{ employees.length }</p>
        </div>
      </div>
      <div className="column">
        <div className="box is-border-primary">
          <div className="columns is-vcentered">
            <div className="column">
              <span class="icon is-large">
                <i class="fab fa-alipay fa-3x"></i>
              </span>
            </div>
            <div className="column">
              <p className="heading">Employees</p>
              <p className="title">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
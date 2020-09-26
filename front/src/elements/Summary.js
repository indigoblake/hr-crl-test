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
        <div className="box is-decorate-border-white has-text-white is-gradient-main ">
          <div className="columns is-vcentered">
              <div className="column is-narrow">
                <span class="icon is-large">
                  <i class="fas fa-building fa-3x"></i>
                </span>
              </div>
              <div className="column">
                <p className="heading">Contractor Businesses</p>
                <p className="title has-text-white">0</p>
              </div>
            </div>
        </div>
      </div>
      <div className="column">
        <div className="box is-decorate-border-primary">
          <div className="columns is-vcentered">
            <div className="column is-narrow">
              <span class="icon is-large">
                <i class="fas fa-user fa-3x has-text-primary"></i>
              </span>
            </div>
            <div className="column">
              <p className="heading">Employees</p>
              <p className="title">0</p>
            </div>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="box is-decorate-border-primary">
          <div className="columns">
            <div className="column">
              <span class="icon is-medium">
                <i class="fas fa-user fa-2x has-text-primary"></i>
              </span>
              <p className="heading mt-1 mb-0">Employees</p>
            </div>
            <div className="column">
              <p className="title has-text-right">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
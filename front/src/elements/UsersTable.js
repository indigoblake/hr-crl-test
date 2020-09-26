import React from 'react'

export const UsersTable = ({users}) => {
  return (
    <table className="table w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td></td>
              <td className="has-text-right">
                <button className="button is-small is-primary">
                  <span>Sync entry</span>
                  <span className="icon is-small">
                    <i className="fas fa-plus-circle"></i>
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
import React from 'react'

export const UsersTable = ({users}) => {
  return (
    <table class="table w-100">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td></td>
              <td class="is-pulled-right">
                <button class="button is-small is-primary">
                  <span>Sync entry</span>
                  <span class="icon is-small">
                    <i class="fas fa-plus-circle"></i>
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
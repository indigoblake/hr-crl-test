import React, { useEffect, useContext } from 'react'
import { Summary } from '../../elements/Summary'
import { Users } from '../../elements/Users'
import { UserContext } from '../../contexts/UserContext'


export const Dashboard = () => {
  const { updateUsers } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:5000/api/users/tp')
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          updateUserContext(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {

        }
      )
  })

  const updateUserContext = (result) => {
    updateUsers(result);
  }
  return (
    <>
      <section className="mb-2 hero has-background-white">
        <div className="hero-body">
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
      <Summary />
      <Users />
    </>
  );
}

import React from 'react'
import { Summary } from '../../elements/Summary'
import { Users } from '../../elements/Users'

export const Dashboard = () => {
  return (
    <>
      <section class="mb-2 hero has-background-white">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Dashboard
            </h1>
            <h2 class="subtitle">
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

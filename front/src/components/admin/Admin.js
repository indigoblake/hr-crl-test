import React from 'react'
import { Dashboard } from './Dashboard'
import { Entries } from './Entries'
import { MainNav } from '../../elements/MainNav'
import { SideNav } from '../../elements/SideNav'
import { Footer } from '../../elements/Footer'
import { BrowserRouter, Route } from 'react-router-dom'

export const Admin = () => {
  return (
    <main className="admin">
      <MainNav />
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-narrow">
            <SideNav />
          </div>
          <div className="column">
            <div className="content-field">
              <Route exact path="/admin/" component={ Dashboard } />
              <Route path="/entries" component={ Entries } />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
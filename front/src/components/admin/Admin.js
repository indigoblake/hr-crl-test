import React from 'react'
import { Dashboard } from './Dashboard'
import { Entries } from './Entries'
import { MainNav } from '../../elements/MainNav'
import { SideNav } from '../../elements/SideNav'
import { Footer } from '../../elements/Footer'
import { BrowserRouter, Route } from 'react-router-dom'

export const Admin = () => {
  return (
    <>
      <div className="container is-fluid">
        <div className="columns is-gapless">
          <div className="column is-narrow">
            <SideNav />
          </div>
          <div className="column">
            <MainNav />
            <Route exact path="/admin/" component={ Dashboard } />
            <Route path="/entries" component={ Entries } />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
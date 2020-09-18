import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import MainNav from './elements/MainNav'
import SideNav from './elements/SideNav'
import Footer from './elements/Footer'
import Dashboard from './components/Dashboard'
import Entries from './components/Entries'
import Profile from './components/Profile'
import './sass/Main.scss'

function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <progress className="progress is-small is-square is-info"></progress>
      <div className="container is-fluid">
        <div className="columns is-variable is-3">
          <div className="column is-narrow">
            <SideNav />
          </div>
          <div className="column">
            <Route exact path="/" component={ Dashboard } />
            <Route path="/entries" component={ Entries } />
            <Route path="/profile" component={ Profile } />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

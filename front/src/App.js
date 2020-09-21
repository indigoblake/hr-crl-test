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
      <progress className="progress mb-0 is-small is-square is-info"></progress>
      <MainNav />
        <div className="columns is-gapless">
          <div className="column is-narrow">
            <SideNav />
          </div>
          <div className="column">
            <section className="section">
              <Route exact path="/" component={ Dashboard } />
              <Route path="/entries" component={ Entries } />
              <Route path="/profile" component={ Profile } />
            </section>

          </div>
        </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

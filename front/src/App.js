import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Login } from './components/onboarding/Login'
import { Admin } from './components/admin/Admin'
import { Entries } from './components/admin/Entries'
import './sass/Main.scss'

// TODO: move routing to a separate file
function App() {
  return (
    <BrowserRouter>
      <Route path="/admin" component={ Admin } />
      <Route path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;

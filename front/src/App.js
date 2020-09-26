import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Login } from './components/onboarding/Login'
import { Admin } from './components/admin/Admin'
import { UserContext, UserContextProvider } from './contexts/UserContext'
import './sass/main.scss'

// TODO: move routing to a separate file
function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Route path="/admin" component={ Admin } />
      </UserContextProvider>
      <Route path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;

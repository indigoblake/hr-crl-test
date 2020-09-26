import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Login } from './components/onboarding/Login'
import { Admin } from './components/admin/Admin'
import { EmployeeContext, EmployeeContextProvider } from './contexts/EmployeeContext'
import './sass/main.scss'

// TODO: move routing to a separate file
function App() {
  return (
    <BrowserRouter>
      <EmployeeContextProvider>
        <Route path="/admin" component={ Admin } />
      </EmployeeContextProvider>
      <Route path="/login" component={ Login } />
    </BrowserRouter>
  );
}

export default App;

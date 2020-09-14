import React from 'react';
import Content from './Content';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className="row">
          <div className="row">
              <div className="col">                
                <nav class="nav flex-column">
                    <a class="nav-link active">Active</a>
                    <a class="nav-link">Link</a>
                    <a class="nav-link">Link</a>
                    <a class="nav-link disabled">Disabled</a>
                </nav>
              </div>
          </div>
        <div className="col">
            <Content />
        </div>
      </div>
    </div>
  );
}

export default App;

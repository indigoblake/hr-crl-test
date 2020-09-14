import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

import './App.css';
import 'bulma/css/bulma.css';


function App() {
    return (
        <div className="App">
            <div className="section">
                <div className="columns">
                    <div class="column is-one-quarter">
                        <Sidebar />
                    </div>
                    <div className="column">
                        <Content />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;

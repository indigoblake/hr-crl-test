import React from 'react';

class Sidebar extends React.Component {
    render() {
        return(
            <aside className="menu">
                <p className="menu-label">
                    General
                </p>
                <ul className="menu-list">
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/">Customers</a></li>
                </ul>
            </aside>
        );
    }
}

export default Sidebar;
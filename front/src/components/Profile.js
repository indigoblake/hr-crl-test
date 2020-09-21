import React from 'react'
import Line from '../elements/Line'
import Card from '../elements/Card'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Profile</h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
        <div className="columns">
          <div className="column">

          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </div>

    );
  }
}

export default Profile;
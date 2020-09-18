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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d817223.2198757977!2d174.4172369406559!3d-36.85975922164986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1600404029294!5m2!1sen!2snz" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            <p>fdfdfd</p>
            <button className="button is-primary is-large">Button</button>
            <div className="content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus debitis a officia illum id neque temporibus? Molestias, iste, error, hic earum pariatur architecto omnis voluptatum cumque possimus adipisci minus voluptatibus.</p>
            </div>
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
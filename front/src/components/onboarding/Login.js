import React from 'react'
import background from '../../assets/images/material-design-hd-wallpaper.jpg'

export const Login = () => {
  return (
    <main className="login">
      <div className="columns is-vcentered">
        <div className="column is-5">
        <section className="login-wrapper">
          <div className="logo text-center">
            <h1 className="title">Title</h1>
          </div>

          <form>
            <div className="field">
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Email" autoComplete="off" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" autoComplete="off" />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
            </div>
          </form>

          </section>
        </div>
        <div className="column is-relative h-100">
          <div className="image bg-image" style={{backgroundImage: `url(${background})`}}></div>
        </div>
      </div>
    </main>
  );
}
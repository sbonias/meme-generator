import React from 'react';

// function based component needs to return something
// we're going to be returning jsx
// a function always needs to return one route jsx element (div, span, anything, but only one)
// we're using a react fragment (like a div that's not a div, just a way of dividing
// up your components and providing one route element without providing html)

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Memerator
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Create
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Memes
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

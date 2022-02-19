import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#!">Navbar</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
      <li className="nav-item active">
        <a className="nav-link" href="#!">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">Link</a>
      </li>
    </ul>
  </div>
</nav>
            </>
        );
    }
}
 
export default Navbar;
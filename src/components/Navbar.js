import { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    const {user} = this.props;
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to={"/"} className="navbar-brand">
            Home
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
             {!user ? (
               <>
                <li className="nav-item active">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/register"} className="nav-link">
                  Register
                </NavLink>
              </li>
               </>
             ) : (
               <>
                <li className="nav-item active">
                <NavLink to={"/logout"} className="nav-link">
                  Logout
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/dashboard"} className="nav-link">
                  Dashboard
                </NavLink>
              </li>
               </>
             )}
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;

import { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const {acount} = this.props;
    return (
      <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <NavLink to={'/'} className="navbar-brand">Navbar</NavLink>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
    <li className="nav-item">
       <NavLink className="nav-link" to={'/'}>Home</NavLink>
      </li>
     {acount ? (
       <>
        <li className="nav-item">
        <NavLink className="nav-link" to={'/logout'}>Logout</NavLink>
       </li>
       <li className="nav-item">
        <NavLink to={'/dashboard'} className="nav-link">Dashboard</NavLink>
       </li>
       </>
     ) : (
       <>
        <li className="nav-item">
       <NavLink className="nav-link" to={'/login'}>Login</NavLink>
      </li>
      <li className="nav-item">
       <NavLink to={'/register'} className="nav-link">Register</NavLink>
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

export default Header;

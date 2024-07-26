import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-link" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;

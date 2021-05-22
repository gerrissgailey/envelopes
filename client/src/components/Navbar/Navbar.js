import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <span class="badge badge-dark">
        <h5>
        Envelopes
        </h5>
      </span>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/dashboard" className= "nav-link active">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className= "nav-link active">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className= "nav-link active">
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard/new-envelope" className= "nav-link active">
              Add a New Envelope
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/deposit" className= "nav-link active">
              Add a Deposit
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

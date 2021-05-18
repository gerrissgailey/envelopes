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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;














// import React from 'react'
// function NavTabs(props) {
    // return (
      // <ul className="nav nav-tabs">
      //   <li className="nav-item">
      //     <a
      //       href="#signup"
      //       onClick={() => props.handlePageChange("signup")}
      //       className={props.currentPage === "signup" ? "nav-link active" : "nav-link"}
      //     >
      //       Signup
      //     </a>
      //   </li>
      //   <li className="nav-item">
      //     <a
      //       href="#login"
      //       onClick={() => props.handlePageChange("login")}
      //       className={props.currentPage === "login" ? "nav-link active" : "nav-link"}
      //     >
      //       Login
      //     </a>
      //   </li>
      //   <li className="nav-item">
      //     <a
      //       href="#dashboard"
      //       onClick={() => props.handlePageChange("dashboard")}
      //       className={props.currentPage === "dashboard" ? "nav-link active" : "nav-link"}
      //     >
      //       Dashboard
      //     </a>
      //   </li>
      // </ul>
    // );
  // }
  // export default NavTabs 
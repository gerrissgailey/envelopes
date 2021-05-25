import React from "react";
import { NavLink } from "react-router-dom";
import { userState } from "../../utils/UserAtom";
import { useRecoilState } from "recoil";

function Navbar() {
  const [user, setUser] = useRecoilState(userState)
  function logOut() {
    setUser("")
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        {/* <span class="badge badge-dark">
          <h5>
          Envelopes
          </h5>
        </span> */}
        <span className="navbar-brand">Envelopes</span>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link" activeClassName="active">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" activeClassName="active">
                Log In
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/new-envelope" className="nav-link" activeClassName="active">
                Add a New Envelope
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/deposit" className="nav-link" activeClassName="active">
                Add a Deposit
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink to="/login" className="nav-link" activeClassName="active">
               */}
               <button type="button" className="btn btn-secondary btn-sm" onClick={logOut}>
                  Log Out
               </button>
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";


function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState("")
  const [user, setUser] = useRecoilState(userState)

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill out both fields.");
      return;
    }
    api.signUpUser(email, password)
    .then(user => setUser(user.data))
    setEmail("");
    setPassword("");
    setRedirect("/dashboard");
  }

  return redirect ? <Redirect to={redirect} />: (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h2>Sign Up Form</h2>
            <form className="signup">
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
              </div>
              {/* <div style={{display: none}} id="alert" className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span> <span className="msg"></span>
              </div> */}
              <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Sign Up</button>
            </form>
            <br />
            <p>Or log in <Link to="/login">here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

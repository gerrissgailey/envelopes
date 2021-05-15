import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";

function Login() {
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
    api.login(email, password)
    .then(user => setUser(user.data))
    setEmail("");
    setPassword("");
    setRedirect("/");
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
            <h2>Login Form</h2>
            <form className="login">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email-input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Login</button>
            </form>
            <br />
            <p>Or sign up <Link to="/signup">here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import api from "../utils/API";
import { userState } from "../utils/UserAtom";
import { useRecoilState } from "recoil";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [redirect, setRedirect] = useState("")
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
    // setRedirect("/dashboard");
  }

  useEffect(() => console.log(user._id), [user]);

  return user ? <Redirect to="/dashboard" />: (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2>Log In Form</h2>
        <form className="login">
          <div className="mb-3">
            <label htmlFor="email-input">Email</label>
            <input type="email" className="form-control" id="email-input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password-input">Password</label>
            <input type="password" className="form-control" id="password-input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Log In</button>
        </form>
        <br />
        <p>Or sign up <Link to="/signup">here</Link></p>
      </div>
    </div>
  );
}

export default Login;

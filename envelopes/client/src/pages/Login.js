import React from "react";

function Login() {
  return (
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
                <input type="email" className="form-control" id="email-input" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="password-input" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <br />
            <p>Or sign up <a href="/">here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

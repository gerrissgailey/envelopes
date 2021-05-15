import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Members from "./pages/Members";
import Wrapper from "./components/Wrapper";
import { RecoilRoot } from "recoil";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div>
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/members" component={Members} />
          </Wrapper>
        </div>
      </Router>
    </RecoilRoot>
    );
  }

  export default App;

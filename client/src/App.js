import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { RecoilRoot } from "recoil";
import Navbar from "./components/Navbar/Navbar";
import NewEnvelope from "./pages/NewEnvelope";
import EnvelopeTransactions from "./pages/EnvelopeTransactions";
import NewDeposit from "./pages/NewDeposit";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <div className="container">
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/new-envelope" component={NewEnvelope} />
            <Route path="/envelope/:id" component={EnvelopeTransactions} />
            <Route path="/deposit" component={NewDeposit} />
        </div>
      </Router>
    </RecoilRoot>
    );
  }

  export default App;

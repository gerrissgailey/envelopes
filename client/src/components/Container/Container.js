import React, { Component } from "react"
import Login from "../../pages/Login"
import Signup from "../../pages/Signup"
import Dashboard from "../../pages/Dashboard"
import NavTabs from "../Navbar/Navbar"

class Container extends Component {
    state = {
      currentPage: "Login"
    };
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
    renderPage = () => {
      if (this.state.currentPage === "Login") {
        return <Login />;
      } else if (this.state.currentPage === "Signup") {
        return <Signup />;
      } else if (this.state.currentPage === "Dashboard") {
        return <Dashboard />;
      } else {
        return <Dashboard />;
      }
    };
    render() {
      return (
        <div className="container">
          {/* <Header> */}
            <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {/* <Jumbotron /> */}
          {/* </Header> */}
          {this.renderPage()}
          {/* <Footer /> */}
        </div>
      );
    }
  }

  export default Container
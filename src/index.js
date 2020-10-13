import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import Header from "./components/Header";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse 
} from "mdbreact";
 
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Client from "./components/Client";
import ExecutiveDueDilligence from "./components/ExecutiveDueDilligence";




class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Router >
      <MDBNavbar color="blue-gradient" dark expand="md">
        <MDBNavbarBrand>
        {/* <img src={homelogo} className="homelogo"
              alt="CTS Label" /> */}
          {/* <strong className="white-text">CTS LABEL</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/service">What We Do</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/executiveduediligence">Executive Due Diligence</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/client">Clients</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact Us</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
             <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/service" component={Service} />
         <Route path="/executiveduediligence" component={ExecutiveDueDilligence} />
         <Route path="/client" component={Client} />
        <Route path="/contact" component={Contact} />
         <Route component={NotFound} />
      </Switch>
      </Router>
      </div>
    );
  }
}

export default Header;


// const routing = (
//   <div>
//   <Router>
//   <Header />

    
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/service" component={Service} />
//         <Route path="/executiveduediligence" component={ExecutiveDueDilligence} />
//         <Route path="/client" component={Client} />
//         <Route path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
   
//   </Router>
//   </div>
  


ReactDOM.render(<Header />, document.getElementById("root"));








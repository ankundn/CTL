import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse 
} from "mdbreact";


// const homelogo = require("../assets/homeimage.jpg")


class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="blue-gradient" dark expand="md">
        <MDBNavbarBrand>
        {/* <img src={homelogo} className="homelogo"
              alt="CTS Label" /> */}
          {/* <strong className="white-text">CTS LABEL</strong> */}
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">Who We Are</MDBNavLink>
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
    );
  }
}

export default Header;

// import React from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <nav className="header">
//       <NavLink className="headername" exact activeClassName="active" to="/">
//         Home
//       </NavLink>
//       <NavLink className="headername" activeClassName="active" to="/about">
//         About
//       </NavLink>
//       <NavLink className="headername" activeClassName="active" to="/contact">
//         Contact
//       </NavLink>
//     </nav>
//   );
// }
// export default Header;

// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// export default () => (
//   <BrowserRouter>
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol size="6">
//           <MDBNav
//             color="blue-gradient"
//             className="font-weight-bold py-4 px-2 mb-4"
//           >
//             <MDBNavLink className="white-text" active to="/">
//               Home
//             </MDBNavLink>
//             <MDBNavLink className="white-text" to="/about">
//               About
//             </MDBNavLink>
//             <MDBNavLink className="white-text" to="/contact">
//               Contact
//             </MDBNavLink>
//           </MDBNav>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   </BrowserRouter>
// );




///////recent header
// import React from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <nav className="header">
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//     </nav>
//   );
// }
// export default Header;

// import React, { Component } from "react";
// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBNavLink,
//   MDBNavbarToggler,
//   MDBCollapse,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
// } from "mdbreact";

// class Header extends Component {
//   state = {
//     isOpen: false,
//   };

//   toggleCollapse = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };

//   render() {
//     return (
//       <MDBNavbar color="blue-gradient" dark expand="md">
//         <MDBNavbarBrand>
//           <strong className="white-text">CTS LABEL</strong>
//         </MDBNavbarBrand>
//         <MDBNavbarToggler onClick={this.toggleCollapse} />
//         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
//           <MDBNavbarNav right>
//             <MDBNavItem active>
//               <MDBNavLink to="/">Home</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/about">Who We Are</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/service">What We Do</MDBNavLink>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle nav caret>
//                   <span className="mr-2">Clients</span>
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem href="#!">StanChart</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Coca Cola</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">KCB</MDBDropdownItem>
//                   <MDBDropdownItem href="#!">Stanbic</MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavItem>
//             <MDBNavItem>
//               <MDBNavLink to="/contact">Contact Us</MDBNavLink>
//             </MDBNavItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBNavbar>
//     );
//   }
// }

// export default Header;

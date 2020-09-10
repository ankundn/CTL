import React from "react";
import "../index.css";
// import React, { Component } from "react";
// import { MDBBtn, MDBCollapse } from "mdbreact";
// import HomeImage from "../assets/homeimage.jpg";
// import { MDBAnimation } from "mdbreact";
class Home extends React.Component {
  state = {
    collapseID: ""
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }
  render() {
    return (
      <div  > 
        <h1 className="heading">Corporate Technical Services</h1> 

        <button type="button" class="btn btn-info" >Mission</button>
        <button type="button" class="btn btn-info">Vision</button>

      
      </div>
      
      
    );
  }
}

export default Home;

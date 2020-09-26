// import React from "react";


// const Client = () => {
//   return (
//    <div></div>
//   );
// };

// export default Client;
import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";
const cocacolalogo = require("../assets/cocacola.png");
const nokialogo = require("../assets/nokia.jpeg");
const microsoftlogo =require("../assets/microsoft.jpg")
const ibmlogo = require("../assets/IBM.png");
const unileverlogo = require("../assets/unilever.jpg");
const wellsfargogrouplogo = require("../assets/wellsfargogroup.png");
const standardcharteredbanklogo = require("../assets/standardchateredbank.png");
const parmalatlogo = require('../assets/parmalat.png')




const Client = () => {
  return (
    <MDBCard className="my-5 px-1 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our Amazing Clients
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
          Our client relationship management philosophy is simple: 
          establish partnerships, provide responsive service,
          understand client goals, apply intelligent solutions and
          treat clients with respect. Rather than considering CTS
          as a vendor of services, we ask that our clients view us as an extension of their teams.
          </p>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img 
                tag="img"
                src= {cocacolalogo}
                className="rounded z-depth-1-half img-fluid"
                alt="Coca Cola Kenya"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Coca Cola Kenya
              </h4>
              {/* <h6 className="text-uppercase grey-text mb-3">Photographer</h6> */}
              
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={nokialogo}
                className="rounded z-depth-1-half img-fluid"
                alt="Nokia EA"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">Nokia EA</h4>
              {/* <h6 className="text-uppercase grey-text mb-3">
                Front-end Developer
              </h6> */}
             
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={microsoftlogo}
                className="rounded z-depth-1-half img-fluid"
                alt="Microsoft EA"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Microsoft EA
              </h4>
              {/* <h6 className="text-uppercase grey-text mb-3">Web Developer</h6> */}
              
            </MDBCol>
          </MDBRow>
          

          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img 
                tag="img"
                src= {ibmlogo}
                className="rounded z-depth-1-half img-fluid"
                alt="IBM EA"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                IBM EA
              </h4>
              {/* <h6 className="text-uppercase grey-text mb-3">Photographer</h6> */}
              
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={parmalatlogo}
                className="rounded z-depth-1-half img-fluid"
                alt="Parmalat SA"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">Parmalat SA</h4>
              {/* <h6 className="text-uppercase grey-text mb-3">
                Front-end Developer
              </h6> */}
             
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={wellsfargogrouplogo}
                className="rounded z-depth-1-half img-fluid"
                alt="Wells Fargo Group"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
              Wells Fargo Group
              </h4>
              {/* <h6 className="text-uppercase grey-text mb-3">Web Developer</h6> */}
              
            </MDBCol>
          </MDBRow>



        </MDBCardBody>
      </MDBCard>
  );
}

export default Client;
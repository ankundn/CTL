import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import Header from "./Header";

const cocacolalogo = require("../assets/cocacola.png")
const nokialogo = require("../assets/nokia.jpeg")
const microsoftlogo =require("../assets/microsoft.jpg")
const ibmlogo = require("../assets/IBM.png")
const unileverlogo = require("../assets/unilever.jpg")
const standardcharteredbanklogo = require("../assets/standardchateredbank.png")
const parmalatlogo = require('../assets/parmalat.png')
const caterpillargroup = require("../assets/caterpillargroup.jpg")
const enterpriserentacar = require('../assets/enterpriserentacar.jpg')
const KDN = require("../assets/KDN.jpg")
const NMG = require('../assets/NMG.jpg')
const UPF = require('../assets/UPF.jpg')
const TATA = require('../assets/tata.png')
const phoenixaviation =require('../assets/phoenixaviation.jpeg')
const candrgroup = require('../assets/CandRGroup.png')

class Client extends React.Component {
  render() {
    return (
      <div>
        <Header />
         <MDBContainer className="container z-depth-1 my-5 py-5">
          <div>      
    <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Clients</h6>
    <MDBAnimation className="clientanimation"type="bounceIn" duration="3s">
    <h2 className="font-weight-bold text-center dark-grey-text pb-2"> Meet Some of Our Amazing Clients</h2>
              </MDBAnimation>
   
    <hr className="w-header my-4" />
         
      <p className="text-center w-responsive mx-auto pb-5">
      We establish partnerships, provide responsive service,
           understand client goals, apply intelligent solutions and
           treat clients with respect. 
         We ask that our clients view us as an extension of their teams rather than considering us a
        vendor of services.
      </p>

           <MDBAnimation className="clientanimation"type="bounceIn" duration="3s">
           
              </MDBAnimation>
      
  </div>


  
        <MDBRow>
          <MDBCol lg="4" md="12" className="cocacolalogo">
            <img src={cocacolalogo} className="img-fluid z-depth-1" alt="Coca Cola Kenya" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={nokialogo} className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={microsoftlogo} className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={ibmlogo} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={unileverlogo} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={standardcharteredbanklogo} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={parmalatlogo} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={caterpillargroup} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={enterpriserentacar} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={KDN} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={NMG} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={UPF} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={TATA} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={candrgroup} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={phoenixaviation} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
     
    );
  }
}

export default Client;
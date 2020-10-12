import React from "react";
import "../index.css";
import {  MDBBtn, MDBContainer,MDBCard, MDBCardGroup, MDBCardText, MDBCardBody } from "mdbreact";
// import {homeimage} from "../assets/homeimage.jpg";
import Header from "./Header";

class About extends React.Component {
  
  render() {
    return (
      
    
<div>
<Header />
<div className="container z-depth-1 my-5 py-5">

  <section>

  {/* <img src={homeimage} className="homeimage"
              alt="" /> */}
    
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Corporate Technical Services 
      </h2>
    <hr className="w-header my-4" />
    <p className="lead text-center text-muted pt-2 mb-5">
    A subsidiary of Captiva Africa Ltd
           (<a href="https://captivaafrica.com">Captiva Africa</a>), was
           established in 2002 in Nairobi,Kenya.
    </p>
    <p className="lead text-center text-muted pt-2 mb-5">
    When we started off, our mision was to integrate innovate technology
        in the provision of security solutions for the corporate client.
    </p>
    <p className="lead text-center text-muted pt-2 mb-5"> Our initial services comprised the automation and system integration of
           traditional security monitoring and response options.</p>
    <div className="row d-flex justify-content-center">
      
    <div className="text-center">
              <MDBBtn color="primary" href="/service">CTS SERVICES</MDBBtn>
            </div>
    </div>
    <div className="row d-flex justify-content-center">





<MDBContainer className="aboutctscards">
  <MDBCardGroup deck>
    <MDBCard >
      <MDBCardBody className="aboutcards">
      
        <MDBCardText className="text-center"  >
        
      CTS was the first company in East Africa to offer work-flow solutions to
           the security decision chain for corporates
      
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>


    <MDBCard >
      <MDBCardBody className="aboutcards">
        
        <MDBCardText className="text-center">
    
      CTS pioneered the use of Radio Frequency tag technology for large
               stores and supermarkets in Kenya to help prevent losses from theft
            by employees and customers
      
        </MDBCardText>
        
      </MDBCardBody>
    </MDBCard>
    
    <MDBCard>
      <MDBCardBody className="aboutcards">
    
        <MDBCardText className="text-center">
        
      CTS was the first local private company in East Africa to be
               contracted by government to offer long term technical assistance
          to the police and ministry of interior
      
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCardGroup>
</MDBContainer>
</div>
  </section>
</div>
    </div>
    );
  }
}

export default About;

import React from "react";
import "../index.css";
// import Footer from "../components/Footer";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class About extends React.Component {
  
  render() {
    return (
      
    
<div>
      <MDBJumbotron fluid className="jumbo">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
          <h2 className="h1 display-4 text-center">Corporate Technical Services</h2>
            <p className="aboutcontent">
           A subsidiary of Captiva Africa Ltd
           (<a href="https://captivaafrica.com">Captiva Africa</a>), was
           established in 2002 in Nairobi,Kenya
            </p>
            <p className="aboutcontent">
              When we started off, our mision was to integrate innovate technology
        in the provision of security solutions for the corporate client.
            </p>
            <p className="aboutcontent">
           Our initial services comprised the automation and system integration of
           traditional security monitoring and response options.
        </p>
            {/* <hr className="my-2" /> */}
            {/* <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p> */}
            <div className="text-center">
              <MDBBtn color="primary" href="/service">CTS SERVICES</MDBBtn>
            </div>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  
  
    <MDBContainer>
  <MDBRow>
    <MDBCol md="4">
      <p className="aboutcontent">
      CTS was the first company in EA to offer work-flow solutions to
           the security decision chain for corporates
      </p>
    </MDBCol>
    <MDBCol md="4">
      <p className ="aboutcontent">
      CTS pioneered the use of Radio Frequency tag technology for large
               stores and supermarkets in Kenya to help prevent losses from theft
            by employees and customers
      </p>
    </MDBCol>
    <MDBCol md="4">
      <p className="aboutcontent">
      CTS was the first local private company in East Africa to be
               contracted by government to offer long term technical assistance
          to the police and ministry of interior
      </p>
    </MDBCol>
  </MDBRow>
</MDBContainer>
  
    </div>
    );
  }
}

export default About;

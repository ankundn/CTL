import React from "react";
import "../index.css";
// import Footer from "../components/Footer";
import {  MDBBtn, MDBContainer,MDBCard, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from "mdbreact";


class About extends React.Component {
  
  render() {
    return (
      
    
<div>
      {/* <MDBJumbotron fluid className="jumbo">
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
            <hr className="my-2" />
            <p>
              It uses utility classes for typgraphy and spacing to space content out
              within the larger container.
            </p>
            <div className="text-center">
              <MDBBtn color="primary" href="/service">CTS SERVICES</MDBBtn>
            </div>
          
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron> */}
  
  
    {/* <MDBContainer>
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
   */}


<div className="container z-depth-1 my-5 py-5">

  
  <section>
    
    

    {/* <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6> */}
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



{/* <div className="w-100">
  
</div> */}




<MDBContainer>
  <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardText>
    <p className="aboutcontent">
      CTS was the first company in EA to offer work-flow solutions to
           the security decision chain for corporates
      </p>
    </MDBCardText>
    <div className="flex-row">

    </div>
  </MDBCard>
  <MDBCard className="card-body-two" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardText>
    <p className ="aboutcontent">
      CTS pioneered the use of Radio Frequency tag technology for large
               stores and supermarkets in Kenya to help prevent losses from theft
            by employees and customers
      </p>
    </MDBCardText>
    <div className="flex-row">

    </div>
  </MDBCard>
  <MDBCard className="card-body-three" style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardText>
    <p className="aboutcontent">
      CTS was the first local private company in East Africa to be
               contracted by government to offer long term technical assistance
          to the police and ministry of interior
      </p>
    </MDBCardText>
    <div className="flex-row">

    </div>
  </MDBCard>
</MDBContainer>

</div>

  </section>
  

</div>
    </div>
    );
  }
}

export default About;

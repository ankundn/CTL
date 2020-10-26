import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBAnimation 
} from "mdbreact";
import "./Header";


const Contact = () => {
  return (
    <div>
     
      <MDBContainer className="container z-depth-1 my-5 py-5" >
     <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Contact</h6>
    <MDBAnimation className="clientanimation"type="bounceIn" duration="3s">
    <h2 className="font-weight-bold text-center dark-grey-text pb-2">Contact Us</h2>
              </MDBAnimation>
   
    <hr className="w-header my-4" />
      <p className="text-center w-responsive mx-auto pb-5">
        Within CTS our clients have access to a team of highly committed and
        skilled professionals with a range of skills and experience in the
        security, investigations and executive management in both public and
        private sectors.
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-email" label="Your email" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-subject" label="Subject" />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label="Your message"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="md">
              Send
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>8 Marissa Court Lavington, P.O Box 6389-200, Nairobi Kenya</p>
          
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+254 722 329 357</p>
            
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>info@cts.co.ke</p>
              <p>info@captivaafrica.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    
  );
};

export default Contact;

import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import "../index.css";

const FormPage = () => {
  return (
    <MDBContainer fluid>
      <div>
        <h2>Our Team</h2>
        <p>
          Our client relationship management philosophy is simple: establish
          partnerships, provide responsive service, understand client goals,
          apply intelligent solutions and treat clients with respect. Rather
          than considering CTS as a vendor of services, we ask that our clients
          view us as an extension of their teams.
        </p>
        <p>
          Within CTS our clients have access to a team of highly committed and
          skilled professionals with a range of skills and experience in the
          security, investigations and executive management in both public and
          private sectors.
        </p>
      </div>
      <MDBRow className="contactform">
        <MDBCol md="5">
          <form>
            <p className="h3 text-left mb-4">Contact Us</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Subject"
                icon="tag"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                type="textarea"
                rows="2"
                label="Your message"
                icon="pencil-alt"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="primary">
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;

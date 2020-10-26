import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Corporate Technical Services</h5>
            <p
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              {
                "8 Marissa Court Lavington\n P.O Box 6389-200 \n Nairobi, Kenya \n +254-722-329-357 \n info@cts.co.ke \n info@captivaafrica.com"
              }
            </p>
            <p
              style={{
                whiteSpace: "pre-wrap",
              }}
            >
              {"1 Bukerere Road, Setta\n Kampala, Uganda \n +256-794-094-966 "}
            </p>
          </MDBCol>

          {/* <MDBCol md="6">
            <h5 className="title">For More Information</h5>
            <ul>
              <li className="list-unstyled">
                <a href="info@cts.co.ke">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-right py-3">
        <MDBContainer fluid>
          Copyright:{" Ankunda Nisha Stephanie"}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;

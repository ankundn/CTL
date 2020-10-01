import React from "react";
import { MDBBtn } from "mdbreact";
// import Footer from "../components/Footer";


const Home = () => {
  return (
    
    <div className="child">

      <div className="hometext">
        <h2 className="h1-responsive font-weight-bold text-center ">
      Corporate Technical Services 
      </h2>
      </div>

    <div className="homebutton">
              <MDBBtn color="primary" href="/about">ABOUT US</MDBBtn>
            </div>

            {/* <Footer /> */}
      </div>
  

  );
};

export default Home;

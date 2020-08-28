import React from "react";
import { MDBAnimation } from "mdbreact";
class Home extends React.Component {
  render() {
    return (
      <div>
        <MDBAnimation type="zoomIn" duration="3s" delay="600ms">
          <img
            className="img-fluid"
            alt=""
            src="https://mdbootstrap.com/img/logo/mdb-transparent-250px.png"
          />
        </MDBAnimation>
        <h1>Main Page</h1>
      </div>
    );
  }
}

export default Home;

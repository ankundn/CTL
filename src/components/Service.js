import React, { Component } from 'react';
import {MDBAnimation} from "mdbreact";

class Service extends Component  {

  render () {

    return (
      
      <div>
  
<div className="container z-depth-1 my-5 py-5">

  
  <section>
    
    

    <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6>
    <MDBAnimation className="clientanimation"type="bounceIn" duration="3s">
    <h2 className="font-weight-bold text-center dark-grey-text pb-2">Our Services</h2>
              </MDBAnimation>
    <hr className="w-header my-4" />
    <p className="lead text-center text-muted pt-2 mb-5">Our expansion into provision of advisory services was a natural
             progression from security hardware and system integration.</p>

    <div className="row d-flex justify-content-center">

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Executive Due Diligence</h5>
        <p className="text-muted mb-5 pb-md-3">Majority of corporate crime does not originate from the shop floor but from the boardroom.
        Executive Due Diligence is therefore a worthwhile investment of resources compared to what is at stake.
       
        </p>
       
      </div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Intellectual Property Violation Investigations</h5>
        <p className="text-muted mb-5 pb-md-3">Identifying piracy of clients intellectual property assets as well as identifying
        the organizations behind theft and distribution of their counterfeited and pirated intellectual property to negate these threats.
        </p>
      </div>

      <div className="w-100"></div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Pre-Investment Due Diligence</h5>
        <p className="text-muted mb-5">Detailed investigation that a potential investor carries out on a target business before  completing
        preliminary negotiations with it's owners.
        </p>
      </div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Corporate Fraud and Theft Investigation</h5>
        <p className="text-muted mb-5">We conduct thorough investigation of a corporation or business in order to uncover wrong doing committed by management, employees or third parties. </p>
      </div>

    </div>
    


    <div className="row d-flex justify-content-center">

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Litigation Support</h5>
  <p className="text-muted mb-5 pb-md-3">We provide consultation and support services to attorneys or others in regard to current and pending cases.</p>
</div>

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Business Risk Mitigation</h5>
  <p className="text-muted mb-5 pb-md-3">We create a strategy to prepare for and reduce the negative effects of threats and business continuity.</p>
</div>

<div className="w-100"></div>

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-primary pt-4 mb-4">Board advisory in mergers and
 acquisitions</h5>
  <p className="text-muted mb-5">We offer advice to business and corporations through mergers and acquisitions.</p>
</div>
</div>

  </section>
  

</div>
      </div>
    )  
  }
  
    
    
    
  
}

export default Service;
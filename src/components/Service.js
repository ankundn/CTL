// import React from "react";
// import "../index.css";
// import Footer from "../components/Footer"

// className Service extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Client Service </h1>
//         <p className="servicecontent">
//           We have since phased out of the supply and system integration of
//           security solutions to focus on investigations and advisory services.
//         </p>
//         <h3>Our advisory and investigation services include:</h3>
//         <ul className="servicecontent">
//           <li>Intellectual Property Violation Investigations</li>
//           <li>Executive Due Diligence</li>
//           <li>Pre-Investment Due Diligence</li>
//           <li>Corporate Fraud and Theft Investigation</li>
//           <li>Litigation Support</li>
//           <li>
//             Business risk mitigation ( due diligence on supply chain partners)
//           </li>
//           <li>
//             Board advisory ( screening of directors of boards) in mergers and
//             acquisitions
//           </li>
//         </ul>
//         <h3>Executive Due Diligence</h3>
//         <p className="servicecontent">
//           From our experience, the majority of corporate crime does not
//           originate from the shop floor but from the boardroom. For example a
//           number of companies in Kenya and the region have lately been caught up
//           in adverse publicity on account of their senior staff being involved
//           in a variety of highly publicised scandals. Candidates for executive
//           positions often have long job histories spanning several companies and
//           geographies, so much so that a standard background check is at times
//           not enough. Executive due diligence is therefore a worthwhile
//           investment of resources, compared to what is at stake. We conduct due
//           diligence, on behalf of clients, on executive level staff or
//           candidates, as well as on key persons at prospective investee
//           companies or partners. Our executive due diligence investigations may
//           be tailored to cover the following areas:
//         </p>
//         <ul className="servicecontent">
//           <li>Confirmation of employment history</li>
//           <li>
//             Confirmation of academic and professional license qualifications
//           </li>
//           <li>History of criminal and civil litigation</li>
//           <li>Misrepresentations in their backgrounds</li>
//           <li>Reputation Risks</li>
//           <li>Politically exposed persons (PEPs)</li>
//           <li> Client/supplier relationships</li>
//           <li>Extensive reference interviews</li>
//           <li>Interpol search</li>
//           <li>Source of Wealth</li>
//           <li>Conflict of Interest</li>
//           <li>Pending Litigation</li>
//           <li>Involvement in other businesses</li>
//           <li>Credit Bureau Reference Checks</li>
//           <li>Links to Organized Crime</li>
//           <li>Verification of Credentials</li>
//           <li>Debts and Solvency</li>
//           <li>Judgments</li>
//           <li>Regulatory Violations</li>
//         </ul>
//         <p className="servicecontent">
//           Any other information of interest to the client
//         </p>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default Service;

import React, { Component } from 'react';


class Service extends Component  {
  // state = {
  //   collapseID: ""
  // }
  
  // toggleCollapse = collapseID => () => {
  //   this.setState(prevState => ({
  //     collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  //   }));
  // }
  render () {

    return (
      
      <div>
  
    {/* <h1 className="font-weight-bold text-center dark-grey-text pb-2">Our Services</h1>
    <hr />
       <p className="servicecontent">
             Our expansion into provision of advisory services was a natural
             progression from security hardware and system integration.
        </p> */}



        {/* <div className="servicerow"> 
<div className="row">

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center bg-success text-white">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="far fa-object-ungroup fa-4x"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Intellectual Property Violation Investigations</h5>
      
      <p className="mb-4">Short explanation on IP
      </p>
    
    </div>
  </div>
</div>

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="fas fa-mobile-alt fa-4x grey-text"></i></p>
      <h5 className="font-weight-normal my-4 py-2"><a className="dark-grey-text" href="/executiveduediligence">Executive Due Dilligence</a></h5>
      
      <p className="text-muted mb-4">Click for more information</p>
    </div>
  </div>
</div>

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center deep-purple lighten-1 text-white">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="fas fa-chart-line fa-4x"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Pre-Investment Due Diligence</h5>
      <p className="mb-4">Short Explanation on Pre-Investment Due Dilligence</p>
    </div>
  </div>
</div>



</div>
</div>
       <div className="row">

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center bg-success text-white">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="far fa-object-ungroup fa-4x"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Corporate Fraud and Theft Investigation</h5>
      <p className="mb-4">Short explanation on CFTI</p>
    </div>
  </div>
</div>

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="fas fa-mobile-alt fa-4x grey-text"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Litigation Support</h5>
      <p className="text-muted mb-4">Short Explanation on LS</p>
    </div>
  </div>
</div>

<div className="col-md-6 col-xl-3 mb-4">
  <div className="card text-center deep-purple lighten-1 text-white">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="fas fa-chart-line fa-4x"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Business Risk Mitigation</h5>
      <p className="mb-4">Short Explanation on BRM</p>
    </div>
  </div>
</div>

<div className="col-md-6 col-xl-3">
  <div className="card text-center">
    <div className="card-body">
      <p className="mt-4 pt-2"><i className="fas fa-bullhorn fa-4x grey-text"></i></p>
      <h5 className="font-weight-normal my-4 py-2">Board Advisory</h5>
      <p className="text-muted mb-4">Short Explanation on BA.</p>
    </div>
  </div>
</div>

</div> */}

<div className="container z-depth-1 my-5 py-5">

  
  <section>
    
    

    {/* <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">Services</h6> */}
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      Our Services
      </h2>
    <hr className="w-header my-4" />
    <p className="lead text-center text-muted pt-2 mb-5">Our expansion into provision of advisory services was a natural
             progression from security hardware and system integration.</p>

    <div className="row d-flex justify-content-center">

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-light pt-4 mb-4">Executive Due Diligence</h5>
        <p className="text-muted mb-5 pb-md-3">Explanation on EDD add link to executiveduediligence</p>
      </div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-secondary pt-4 mb-4">Intellectual Property Violation Investigations</h5>
        <p className="text-muted mb-5 pb-md-3">Explanation on IPVI</p>
      </div>

      <div className="w-100"></div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-light pt-4 mb-4">Pre-Investment Due Diligence</h5>
        <p className="text-muted mb-5">Explanation on PIDD.</p>
      </div>

      <div className="col-md-6 col-lg-5 col-xl-4">
        <h5 className="font-weight-normal border-top border-light pt-4 mb-4">Corporate Fraud and Theft Investigation</h5>
        <p className="text-muted mb-5">Explanation on CFTI</p>
      </div>

    </div>
    


    <div className="row d-flex justify-content-center">

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-light pt-4 mb-4">Litigation Support</h5>
  <p className="text-muted mb-5 pb-md-3">Explanation on LS</p>
</div>

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-secondary pt-4 mb-4">Business Risk Mitigation</h5>
  <p className="text-muted mb-5 pb-md-3">Explanation on BRM</p>
</div>

<div className="w-100"></div>

<div className="col-md-6 col-lg-5 col-xl-4">
  <h5 className="font-weight-normal border-top border-light pt-4 mb-4">Board advisory in mergers and
 acquisitions</h5>
  <p className="text-muted mb-5">Explanation on BA.</p>
</div>

{/* <div class="col-md-6 col-lg-5 col-xl-4">
  <h5 class="font-weight-normal border-top border-light pt-4 mb-4">Button for Edd</h5>
  <p class="text-muted mb-5">Explanation on CFTI</p>
</div> */}

</div>

  </section>
  

</div>
      </div>
    )  
  }
  
    
    
    
  
}

export default Service;
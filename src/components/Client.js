// import React from "react";
// import {  MDBRow, MDBAnimation, MDBCol } from "mdbreact";
// import "../index.css";


// const cocacolalogo = require("../assets/cocacola.png")
// const nokialogo = require("../assets/nokia.jpeg")
// const microsoftlogo =require("../assets/microsoft.jpg")
// const ibmlogo = require("../assets/IBM.png")
// const unileverlogo = require("../assets/unilever.jpg")
// const wellsfargogrouplogo = require("../assets/wellsfargogroup.png")
// const standardcharteredbanklogo = require("../assets/standardchateredbank.png")
// const parmalatlogo = require('../assets/parmalat.png')
// const caterpillargroup = require("../assets/caterpillargroup.jpg")
// const enterpriserentacar = require('../assets/enterpriserentacar.jpg')
// const KDN = require("../assets/KDN.jpg")
// const NMG = require('../assets/NMG.jpg')
// const UPF = require('../assets/UPF.jpg')
// const TATA = require('../assets/tata.png')
// const SDAI = require('../assets/SDA.jpg')
// const phoenixaviation =require('../assets/phoenixaviation.jpeg')



// class Client extends React.Component {
  
//   render() {
//     return (
      
    
// <div className ="mainclientdiv">
//   <div>
//   <h2 className="h1-responsive font-weight-bold my-5 text-center">
//             Our Amazing Clients
//           </h2>
//           <p className="grey-text w-responsive mx-auto mb-5">
//           We establish partnerships, provide responsive service,
//           understand client goals, apply intelligent solutions and
//           treat clients with respect. 
//         We ask that our clients view us as an extension of their teams rather than considering us a
//           vendor of services.
//           </p>
//   </div>
//   <div className="clientlogo">
//     <MDBCol>

//     <MDBRow >
//     <div className="cocacolalogo">
//     <img 
//                 className ="cocacola"
//                 src= {cocacolalogo}
//                 alt="Coca Cola Kenya"
//               />
            
//     </div>
//      <div className="ibmlogo">
//     <img 
//                className ="ibm"
//                 src= {ibmlogo}
//                 alt="IBM EA"
//               />
              
//     </div>
    
//     <div className="nokialogo">
//     <img 
//                className ="nokia"
//                 src= {nokialogo}
//                 alt="Nokia EA"
//               />
              
//     </div>
  
//     <div className="microsoftlogo">
//     <img 
//                className ="microsoft"
//                 src= {microsoftlogo}
//                 alt="Microsoft EA"
//               />           
//     </div>   
//     </MDBRow>

//     <MDBRow>

//      <div className="unileverlogo">
//     <img 
//                className ="unilever"
//                 src= {unileverlogo}
//                 alt="Unilever EA"
//               />           
//     </div>  
  
//     <div className="tatalogo">
//     <img 
//                className ="tata"
//                 src= {TATA}
//                 alt="TATA Group"
//               />           
//     </div> 
//     <div className="standardcharteredbanklogo">
//     <img 
//                className ="standardcharteredbank"
//                 src= {standardcharteredbanklogo}
//                 alt="Standard Chartered Bank"
//               />           
//     </div> 
    
//     <div className="parmalatlogo">
//     <img 
//                className ="parmalat"
//                 src= {parmalatlogo}
//                 alt="Parmalat SA"
//               />           
//     </div>  

//     </MDBRow>
//     <MDBRow>
//     <div className="caterpillargrouplogo">
//     <img 
//                className ="caterpillargroup"
//                 src= {caterpillargroup}
//                 alt="Caterpillar Group"
//               />           
//     </div> 
//     <div className="kenyadatanetworkslogo">
//     <img 
//                className ="kenyadatanetworks"
//                 src= {KDN}
//                 alt="Kenya Data Networs(Liquid Telkom)"
//               />           
//     </div> 
//     <div className="nationmediagrouplogo">
//     <img 
//                className ="nationmediagroup"
//                 src= {NMG}
//                 alt="Nation Media Group"
//               />           
//     </div> 

//     <div className="upflogo">
//     <img 
//                className ="upf"
//                 src= {UPF}
//                 alt="Uganda Police Force"
//               />           
//     </div> 
//     </MDBRow>

    
//     <MDBRow>
//     <div className="sdalogo">
//     <img 
//                className ="sda"
//                 src= {SDAI}
//                 alt="Software Distributors Africa LTD"
//               />           
//     </div> 
//     <div className="pheonixaviationlogo">
//     <img 
//                className ="pheonixaviation"
//                 src= {phoenixaviation}
//                 alt="Pheonix Aviation"
//               />           
//     </div> 
   
//     <MDBAnimation className="clientanimation"type="slideInLeft" duration="3s">
//           ...so many more clients, join us today. 
//                   </MDBAnimation>
//     </MDBRow>
//     </MDBCol>
//   </div>

//     </div>
//     );
//   }
// }

// export default Client;

import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const cocacolalogo = require("../assets/cocacola.png")
const nokialogo = require("../assets/nokia.jpeg")
const microsoftlogo =require("../assets/microsoft.jpg")
const ibmlogo = require("../assets/IBM.png")
const unileverlogo = require("../assets/unilever.jpg")
const standardcharteredbanklogo = require("../assets/standardchateredbank.png")
const parmalatlogo = require('../assets/parmalat.png')
const caterpillargroup = require("../assets/caterpillargroup.jpg")
const enterpriserentacar = require('../assets/enterpriserentacar.jpg')
const KDN = require("../assets/KDN.jpg")
const NMG = require('../assets/NMG.jpg')
const UPF = require('../assets/UPF.jpg')
const TATA = require('../assets/tata.png')
const phoenixaviation =require('../assets/phoenixaviation.jpeg')
const candrgroup = require('../assets/CandRGroup.png')

class Client extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
          <div>
   <h2 className="h1-responsive font-weight-bold my-5 text-center">
             Our Amazing Clients
           </h2>
           <p className="grey-text w-responsive mx-auto mb-5">
           We establish partnerships, provide responsive service,
           understand client goals, apply intelligent solutions and
           treat clients with respect. 
         We ask that our clients view us as an extension of their teams rather than considering us a
        vendor of services.           </p>
  </div>
        <MDBRow>
          <MDBCol lg="4" md="12" className="cocacolalogo">
            <img src={cocacolalogo} className="img-fluid z-depth-1" alt="Coca Cola Kenya" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={nokialogo} className="img-fluid z-depth-1-half"
              alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={microsoftlogo} className="img-fluid z-depth-2" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={ibmlogo} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={unileverlogo} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={standardcharteredbanklogo} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={parmalatlogo} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={caterpillargroup} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={enterpriserentacar} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={KDN} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={NMG} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={UPF} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
    <img src={TATA} className="img-fluid z-depth-3" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={candrgroup} className="img-fluid z-depth-4" alt="" />
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4">
            <img src={phoenixaviation} className="img-fluid z-depth-5" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Client;
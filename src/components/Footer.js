import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h1>
        {"Corporate Technical Services a Group Company of Captiva Africa"}
      </h1>

      <h3>Contact Us: </h3>
      <p
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {
          "8 Marisa Court Lavington \n P.O Box 6389-200 \n Nairobi +254 722 329 357 \n info@cts.co.ke \n info@captivaafrica.com"
        }
      </p>
      <p
        style={{
          whiteSpace: "pre-wrap",
        }}
      >
        {"1 Bukerere Road, Setta \n Kampala Uganda \n+256794094966"}
      </p>
    </div>
  );
}

export default Footer;

// const styles = {
//   fontFamily: 'sans-serif',
//   textAlign: 'center',
// };

// const App = () => {
//   return (
//   <div style={styles}>
//     <Hello name="CodeSandbox" />
//     <p style={{
//       'white-space': 'pre-wrap'
//       }}>{"This \n works"}</p>
//     <p style={{
//       'white-space': 'pre-wrap'
//     }}>Does \n not \n work</p>
//   </div>
//   );
// };

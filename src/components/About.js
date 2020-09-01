import React from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <p>
          Corporate Technical Services (ltd), a subsidiary of Captiva Africa Ltd
          (<a href="https://captivaafrica.com">Captiva Africa</a>), was
          established in 2002 in Nairobi,Kenya
        </p>
        <p>
          When we started off, our mision was to integrate innovate technology
          in the provision of security solutions for the corporate client.
        </p>
        <p>
          Our initial services comprised the automation and systemintegration of
          traditional security monitoring and response options.
        </p>
        <p></p>
        <p
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {
            " These included the design, installation and maintenance of electronic surveillance products such as Close Circuit Television(CCTV) systems,\nand multi-redundancy counter-intrusion systems for equipment and  premises "
          }
        </p>
      </div>
    );
  }
}

export default About;

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

        <p
          style={{
            whiteSpace: "pre-wrap",
          }}
        >
          {
            " These included the design, installation and maintenance of electronic surveillance products such as Close Circuit Television(CCTV) systems,\nand multi-redundancy counter-intrusion systems for equipment and  premises "
          }
        </p>
        <div>
          <h4>Milestones</h4>
          <p>
            Some of our milestones in the evolution of the security sector in
            the region include the following:
          </p>
          <ul>
            <li>
              CTS was the first company in EA to offer work-flow solutions to
              the security decision chain for corporates
            </li>
            <li>
              CTS pioneered the use of Radio Frequency tag technology for large
              stores and supermarkets in Kenya to help prevent losses from theft
              by employees and customers
            </li>
            <li>
              CTS was the first local private company in East Africa to be
              contracted by government to offer long term technical assistance
              to the police and ministry of interior
            </li>
          </ul>
          <p>
            Our expansion into provision of advisory services was a natural
            progression from security hardware and system integration. This was
            on a large part in response to the evolving challenges faced by the
            corporate client who encountered far more risk of exposure to loss
            from internal factors, rather than external threats.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

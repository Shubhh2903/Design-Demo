/** @format */

import React from "react";
import styled from "styled-components";
import laptop from "../Image/laptop-img.png";
function Contact() {
  return (
    <div>
      <Wrapper>
        <Heading>
          <span style={{ fontSize: "90px" }}>C</span>ontact{" "}
          <span style={{ fontSize: "90px" }}>U</span>s{" "}
          <span style={{ fontSize: "90px" }}>T</span>oday
        </Heading>
        <SubHeading>
          We are{" "}
          <span style={{ fontFamily: "Lato-Heavy" }}>Here to help you</span>
        </SubHeading>
        <Subwrapper>

        </Subwrapper>
      </Wrapper>
    </div>
  );
}

export default Contact;
const Subwrapper = styled.div`
    
`
const Wrapper = styled.div`
  margin-top: 60px;
  margin-left: 115px;
`;
const Heading = styled.div`
  font-family: Lato-Bold;
  font-size: 60px;
  letter-spacing: 19px;
  font-weight: bold;
  color: #dbe8f3;
`;

const SubHeading = styled.div`
  font-family: Lato-Regular;
  font-size: 38px;
  color: #0f273b;
  margin-top: 26px;
  line-height: 50px;
`;

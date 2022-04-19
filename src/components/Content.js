import React from "react";
import styled from "styled-components";
import Container from "../atoms/Container";
import FontStyle from "../font/FontStyle";
const Text = styled.div`
  height: 176px;
  width: 643.4px;
  padding-top: 282px;
  font-family: Lato-Light;
  line-height: 1.23;
  font-size: 65px;
  font-weight: 300;
  color: #111;
`;

const Subparagrah = styled.p`
  width: 612px;
  height: 62px;
  line-height: 1.89;
  font-size: 18px;
  color: #3f3f3f;
`;

const Contact = styled.button`
  width: 239px;
  height: 62px;
  padding: 20px 77px;
  bordar-radius: 2px;
  border: solid 2px #fea825;
  background-color: #fea825;
  color: #ffffff;
  font-family: Lato-SemiBold;
  cursor: pointer;
`;

const OurStory = styled.div`
  width: 480px;
  height: 108px;
  font-weight: bold;
  opacity: 0.12;
  font-size: 60px;
  font-family: Lato-SemiBold;
  letter-spacing: 13.4px;
  color: #1b75bc;
  margin-top: 400px;
`;

const Heading = styled.div`
  font-size: 38px;
  width: 610px;
  height: 50px;
  line-height: 1.32;
  color: #2c2c2c;
  font-family: Lato-Regular;
  margin-top: 26px;
`;
const Description = styled.div`
  width: 612px;
  height: 326px;
  font-size: 16px;
  font-family: Lato-Regular;
  color: #3f3f3f;
  margin-top: 39px;
`;

function Content() {
  return (
    <div>
      <FontStyle />
      <Container>
      <OurStory>
        <span style={{ fontSize: "90px" }}>o</span>ur{" "}
        <span style={{ fontSize: "90px" }}>s</span>tory
      </OurStory>
      <Heading>
        Increase your <b>Business performance</b>
      </Heading>
      <Description>
        <p style={{lineHeight:"26px"}}>
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

      </Description>
      </Container>
    </div>
  );
}

export default Content;

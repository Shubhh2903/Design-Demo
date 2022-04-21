import React from "react";
import styled from "styled-components";
import FontStyle from "../font/FontStyle";
import Photo from "../Image/about-us.png";
function Content() {
  return (
    <div>
      <FontStyle />

      <BodySection>
        <div>
          <OurStory>
            <div>
              <span style={{ fontSize: "90px" }}>o</span>ur
            </div>
            <div>
              <span style={{ fontSize: "90px" }}>s</span>tory
            </div>
          </OurStory>
          <Heading>
            Increase your <b>Business performance</b>
          </Heading>
          <Description>
            <p style={{ lineHeight: "26px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Description>
          <Contact>Contact Us</Contact>
        </div>
       
          <AboutUs />
       
      </BodySection>
    </div>
  );
}

export default Content;

const OurStory = styled.div`
  width: 480px;
  height: 108px;
  font-weight: bold;
  opacity: 0.12;
  font-size: 60px;
  font-family: Lato-SemiBold;
  letter-spacing: 13.4px;
  color: #1b75bc;
  display: flex;
  // flex-direction:column;
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

const BodySection = styled.div`
  display: flex;
  margin: 100px 96px 100px 115px;
  justify-content: space-between;
`;

const AboutUs = styled.div`
  background-image: url(${Photo});
  width: 510px;
  height: 629px;
  background-size: cover;
  margin: 25px 0 96px 249px;
`;

const Contact = styled.button`
  width: 239px;
  height: 62px;
  font-size: 18px;
  bordar-radius: 2px solid;
  border: solid 2px #fea825;
  font-family: Lato-SemiBold;
  cursor: pointer;
  color: #fea825;
  background-color:white;
`;
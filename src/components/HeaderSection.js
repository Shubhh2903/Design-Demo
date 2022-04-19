/** @format */
import Logo from "../Image/logo.png"
import styled from "styled-components";
import banner from "../Image/home-banner/home-banner.jpg";
import Navbar from "../components/Navbar";
import Container from "../atoms/Container";
import React from "react";
import FontStyle from "../font/FontStyle";
const Wrapper = styled.div`
  background-image: url(${banner});
  display:flex;
  background-repeat: no-repeat;
  background-size: contain;
  background-position:top right;
  height:771px;
  padding-top:25px;
`;
const Icon = styled.div`
  background-image: url(${Logo});
  width: 133px;
  height: 47px;
  background-repeat: no-repeat;

`;
const Text = styled.div`
  font-family: Lato-Light;
  line-height: 1.23;
  font-size: 65px;
  font-weight: 300;
  color: #111;
`;

const Subparagrah = styled.p`
  width: 612px;
  margin-top:3px;
  line-height: 1.89;
  font-size: 18px;
  color: #3f3f3f;
  margin:0;
`;

const Contact = styled.button`
  width: 239px;
  height: 62px;
  margin-top:68px;
  font-size:18px;
  bordar-radius: 2px;
  border: solid 2px #fea825;
  background-color: #fea825;
  color: #ffffff;
  font-family: Lato-SemiBold;
  cursor: pointer;
`;

const Heading = styled.div`
  margin: auto 0;
  width:50%;
`;

const Header = styled.div`
  display: flex;
  height: 47px;
  justify-content: space-between;
  align-items: center;
`;
function HeaderSection() {
  return (
    <>
    <FontStyle />
      <Wrapper>
        <Container>
          <Header>
            <Icon />
            <Navbar />
          </Header>
          <Heading>
            <Text>
              <b>Experience</b> For Powerful Resutls
            </Text>
            <Subparagrah>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Subparagrah>
            <Contact>Contact Us</Contact>
          </Heading>
        </Container>
      </Wrapper>
      
    </>
  );
}

export default HeaderSection;

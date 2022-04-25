/** @format */

import React from "react";
import styled from "styled-components";
import bg from "../Image/bg.svg";
import footerLogo from "../Image/fotter-logo.png";
import facebook from "../Image/logo-fb-simple.png";
import insta from "../Image/logo-instagram.png";
import pinterest from "../Image/logo-pinterest.svg";
import twitter from "../Image/logo-twitter.png";
function Footer() {
  return (
    <div>
      <Cotent>
        <Logo />
        <List>
          <Head>
            <span style={{ fontSize: "18px" }}>C</span>
            ompany
            <Nav>
              <Ul>
                <li>Home</li>
                <li>Service</li>
                <li>Blogs</li>
                <li>Contact US</li>
              </Ul>
            </Nav>
          </Head>
        </List>
        <VisitUS>
          <span style={{ fontSize: "18px" }}>V</span>isit Us
          <Socail>
            <Facebookdiv>
              <Facebook />
            </Facebookdiv>
            <Instagramdiv>
              <Instagram />
            </Instagramdiv>
            <Pinterestdiv>
              <Pinterest />
            </Pinterestdiv>
            <Twitterdiv>
              <Twitter />
            </Twitterdiv>
          </Socail>
        </VisitUS>
        <SignUp>
          <Label>Sign up to our newsletter</Label>
          <Email placeholder="Your Email Address"></Email>
        </SignUp>
      </Cotent>
    </div>
  );
}

export default Footer;

const Email = styled.input`
  width: 270px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 4px;
  margin-top:40px;
  font-family:Montserrat-Light;
  font-size:14px;
`;
const Label = styled.div`
  font-family: Lato-Bold;
  font-size: 12px;
  color: #ffffff;
  width: 177px;
  height: 22px;
  margin-right: 200px;
`;

const SignUp = styled.div`
  display: flex;
  flex-direction:column;
`;
const Twitter = styled.div`
  background-image: url(${twitter});
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
`;
const Twitterdiv = styled.div`
  background-color: #012e51;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Pinterestdiv = styled.div`
  background-color: #012e51;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Pinterest = styled.div`
  background-image: url(${pinterest});
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
`;

const Instagramdiv = styled.div`
  background-color: #fea825;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Instagram = styled.div`
  background-image: url(${insta});
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
`;
const Facebookdiv = styled.div`
  background-color: #012e51;
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Facebook = styled.div`
  background-image: url(${facebook});
  background-size: cover;
  background-repeat: no-repeat;
  width: 10px;
  height: 16px;
`;

const Socail = styled.div`
  margin-top: 40px;
  display: grid;
  display: flex;
  grid-template-columns: 1fr 1fr;
`;

const VisitUS = styled.div`
  font-family: lato-Bold;
  font-size: 12px;
  color: #fff;
  margin-top: 100px;
`;
const Ul = styled.ul`
  font-familu:;ato-Regular;
  font-size:14px;
  line-height: 2.43;
  color:#ffffff
  margin-left:0px;
  list-style:none;
  padding:0;
`;
const List = styled.div`
  display: flex;
  margin-top: 162px;
  align-items: center;
`;
const Nav = styled.div`
  flex-direction: column;
  padding: 0;
  align-items: left;
`;
const Head = styled.div`
  color: #ffffff;
  font-family: lato-bold;
  font-size: 12px;
`;
const Cotent = styled.div`
  display: flex;
  background-image: url(${bg});
  background-size: cover;
  height: 459px;
  background-repeat: no-repeat;
  margin-top: 100px;
  width: 100%;
  fill: #024376;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  background-image: url(${footerLogo});
  background-size: cover;
  width: 224px;
  height: 79px;
  margin: 216px 0 0 117px;
`;

/** @format */

import React from "react";
import styled from "styled-components";
import bg from "../Image/bg.svg";
import footerLogo from "../Image/fotter-logo.png";
import facebook from "../Image/logo-fb-simple.png";
import insta from "../Image/logo-instagram.png";
import pinterest from "../Image/logo-pinterest.png";
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
          </Socail>
        </VisitUS>
      </Cotent>
    </div>
  );
}

export default Footer;
const Facebookdiv = styled.div`
  background-color: #012e51;
  height: 48px;
  width: 48px;
  align-items: center;
`;
const Facebook = styled.div`
  backrground-image: url(${facebook});
  background-size: contain;
  background-repeat: no-repeat;
  width: 10px;
  height: 16px;
`;

const Socail = styled.div`
  dispaly: flex;
`;

const VisitUS = styled.div`
  font-family: lato-Bold;
  font-size: 12px;
  color: #fff;
  margin: 215px 0 0 200px;
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
  margin: 162px 0 0 100px;
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
`;
const Logo = styled.div`
  background-image: url(${footerLogo});
  background-size: cover;
  width: 224px;
  height: 79px;
  margin: 216px 0 0 117px;
`;

/** @format */

import React from "react";
import styled from "styled-components";
import bit from "../Image/bitmap.png";
import rectangle from "../Image/rectangle-copy-21.png";
import facebook from "../Image/facebook.png";
import yahoo from "../Image/yahoo.png";
import google from "../Image/google.png";
import mint from "../Image/mint.png";
import guess from "../Image/gusse.png";
import kreation from "../Image/kreation.png";
import vital from "../Image/vital.png";
import never from "../Image/never.png";
import amazon from "../Image/amazon.png";
import insta from "../Image/instagram.png";
import rooter from "../Image/roaster.png";
function Company() {
  return (
    <>
      <Content>
        <Bit />
        <Facebook />
        <Yahoo />
        <Google />
        <Mint />
        <Guess />
        <Kreation />
        <Vital />
        <Never />
        <Amazon />
        <Instagram />
        <Roaster />
      </Content>
    </>
  );
}

export default Company;

const Content = styled.div`
  display: flex;
  margin-left: 40px;
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;
  background-color: #f7f9fb;

`;
const Bit = styled.div`
  background-image: url(${bit});
  width: 25%;
  height: 90px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;
const Facebook = styled.div`
  width: 25%;
  background-image: url(${facebook});
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Yahoo = styled.div`
  width: 25%;
  background-image: url(${yahoo});
  height: 47px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Google = styled.div`
  width: 25%;
  background-image: url(${google});
  height: 68px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Mint = styled.div`
  width: 25%;
  background-image: url(${mint});
  height: 68px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Guess = styled.div`
  background-image: url(${guess});
  width: 25%;
  height: 42px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Kreation = styled.div`
  background-image: url(${kreation});
  height: 81px;
  background-repeat: no-repeat;
  width: 25%;
  background-size: contain;
  margin-bottom: 49px;
`;

const Vital = styled.div`
  background-image: url(${vital});
  height: 47px;
  background-repeat: no-repeat;
  width: 25%;
  background-size: contain;
  margin-bottom: 49px;
`;

const Never = styled.div`
  background-image: url(${never});
  height: 81px;
  width: 25%;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Amazon = styled.div`
  background-image: url(${amazon});
  width: 25%;
  height: 54px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Instagram = styled.div`
  background-image: url(${insta});
  width: 25%;
  height: 56px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

const Roaster = styled.div`
  background-image: url(${rooter});
  width: 25%;
  height: 38px;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 49px;
`;

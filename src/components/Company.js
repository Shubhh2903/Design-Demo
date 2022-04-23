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
        <Parent>
          <BitParent>
            <Bit />
          </BitParent>
          <Facebook_Parent>
            <Facebook />
          </Facebook_Parent>
          <YahooParent>
            <Yahoo />
          </YahooParent>
          <GoogleParent>
            <Google />
          </GoogleParent>
        </Parent>
      </Content>

      <SecondRow>
        <MintParent>
          <Mint />
        </MintParent>
        <GussParent>
          <Guess />
        </GussParent>
        <KreationParent>
          <Kreation />
        </KreationParent>
        <VitalParent>
          <Vital />
        </VitalParent>
      </SecondRow>

      <ThirdRow>
        <NeverParent>
          <Never />
        </NeverParent>
        <AmazonParent>
          <Amazon />
        </AmazonParent>
        <InstaParent>
          <Instagram />
        </InstaParent>
        <RooterParent>
          <Roaster />
        </RooterParent>
      </ThirdRow>
    </>
  );
}

export default Company;
const BitParent = styled.div`
  width: 25%;
`;
const Facebook_Parent = styled.div`
  width: 25%;
`;
const YahooParent = styled.div`
  width: 25%;
`;
const GoogleParent = styled.div`
  width: 25%;
`;
const MintParent = styled.div`
  width: 25%;
`;
const GussParent = styled.div`
  width: 25%;
`;
const KreationParent = styled.div`
  width: 25%;
`;
const VitalParent = styled.div`
  width: 25%;
`;
const NeverParent = styled.div`
  width:25%;
`
const AmazonParent = styled.div`
  width:25%;
`
const InstaParent = styled.div`
  width:25%;
`
const RooterParent = styled.div`
  width:25%;
`
const SecondRow = styled.div`
  display: flex;
  background-color: #f7f9fb;
  width: 100%;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-left: 35px;
  height: 170px;
`;
const ThirdRow = styled.div`
  display: flex;
  background-color: #f7f9fb;
  width: 100%;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-left: 35px;
  height: 170px;
`;
const Parent = styled.div`
  display: flex;
  background-color: #f7f9fb;
  width: 100%;
  gap: 1px;
  justify-content: space-between;
  align-items: center;
  height: 170px;
`;
const Content = styled.div`
  display: flex;
  margin-left: 40px;
  flex-direction: row;
  margin-top: 100px;
  align-items: center;
  justify-content: space-between;
`;
const Bit = styled.div`
  background-image: url(${bit});
  height: 90px;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Facebook = styled.div`
  background-image: url(${facebook});
  height: 50px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Yahoo = styled.div`
  background-image: url(${yahoo});
  height: 47px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Google = styled.div`
  background-image: url(${google});
  height: 68px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Mint = styled.div`
  background-image: url(${mint});
  height: 68px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Guess = styled.div`
  background-image: url(${guess});
  height: 42px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Kreation = styled.div`
  background-image: url(${kreation});
  height: 81px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Vital = styled.div`
  background-image: url(${kreation});
  height: 81px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Never = styled.div`
  background-image: url(${never});
  height: 81px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Amazon = styled.div`
  background-image: url(${amazon});
  height: 54px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Instagram = styled.div`
  background-image: url(${insta});
  height: 56px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Roaster = styled.div`
  background-image: url(${rooter});
  height: 90px;
  background-repeat: no-repeat;
  background-size: contain;
`;
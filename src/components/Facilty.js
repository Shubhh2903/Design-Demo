import React from "react";
import styled from "styled-components";
import advice from "../Image/advisory.png";
import modration from "../Image/modernisation-ic.png";
import consult from "../Image/consulting-ic.png";
import reg from "../Image/registration.png";
import work from "../Image/work-force-ic.png";
import coaching from "../Image/coaching-ic.png";
import reserch from "../Image/training-conferenc-ic.png";
function Facilty() {
  return (
    <>
  
      <Main>
        <LeftWrapper>
          <FirstRow>
            <FirstDiv>
              <ImgData></ImgData>
              <Text>Modernisation</Text>
            </FirstDiv>
            <SecondDiv>
              <ImgData2></ImgData2>
              <Text>Advisory</Text>
            </SecondDiv>
          </FirstRow>
          <SecondRow>
            <ThirdDiv>
              <ImgData3></ImgData3>
              <Text>Consulting</Text>
            </ThirdDiv>
            <FourthDiv>
              <ImgData4></ImgData4>
              <Text>Reorganisation</Text>
            </FourthDiv>
            <FiveDiv>
              <ImgData5></ImgData5>
              <Text>Work Force</Text>
            </FiveDiv>
          </SecondRow>
          <ThirdRow>
            <SixDiv>
              <ImgData6></ImgData6>
              <Text>Modernisation</Text>
            </SixDiv>
            <SevenDiv>
              <ImgData7></ImgData7>
              <Text>Modernisation</Text>
            </SevenDiv>
          </ThirdRow>
        </LeftWrapper>
        <RightWrapper>
          <Heading>
            <div>
              <h1>Reorganisations </h1>
            </div>
          </Heading>
          <Data>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <Contact>Contact Us</Contact>
          </Data>
        </RightWrapper>
      </Main>
    </>
  );
}

export default Facilty;

const Contact = styled.button`
  width: 239px;
  height: 62px;
  font-size: 18px;
  bordar-radius: 2px solid;
  border: solid 2px #fea825;
  font-family: Lato-SemiBold;
  cursor: pointer;
  color: #fea825;
  background-color: white;
  margin-top:30px;
`;
const Data = styled.div`
  font-size: 15px;
  font-family: Lato-Regular;
  text-align: center;
  width: 418px;
  height: 104px;
  margin: 0 auto;
  line-height: 35px;
`;

const FirstRow = styled.div`
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;
const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;
const ThirdRow = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
`;
const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;
const Heading = styled.div`
  text-align: center;
  justify-content: center;
`;
const ImgData = styled.div`
  background-image: url(${modration});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  font-family: Lato-SemiBold;
  font-size: 20px;
  color: black;
  text-align: center;
  margin-top: 38px;
`;

const ImgData2 = styled.div`
  background-image: url(${advice});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImgData3 = styled.div`
  background-image: url(${consult});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ImgData4 = styled.div`
  background-image: url(${reg});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ImgData5 = styled.div`
  background-image: url(${work});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;
const ImgData6 = styled.div`
  background-image: url(${coaching});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImgData7 = styled.div`
  background-image: url(${reserch});
  height: 83px;
  width: 83px;
  margin: 48px 60.6px 0 60px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const FirstDiv = styled.div`
  background-color: white;
  height: 213px;
  width: 203.6px;
`;
const SecondDiv = styled.div`
  background-color: white;
  height: 213px;
  width: 203.6px;
  margin-top: 15px;
`;

const ThirdDiv = styled.div`
  background-color: white;
  height: 213px;
  width: 203.6px;
`;

const FourthDiv = styled.div`
  background-color: #1b75bc;
  height: 213px;
  width: 203.6px;
  margin-top: 15px;
`;

const FiveDiv = styled.div`
  background-color: white;
  height: 213px;
  width: 203.6px;
  margin-top: 15px;
`;

const SixDiv = styled.div`
  background-color: white;
  height: 213px;
  width: 203.6px;
  flex-direction: column;
`;

const SevenDiv = styled.div`
  margin-top: 15px;
  background-color: white;
  height: 213px;
  width: 203.6px;
  flex-direction: column;
`;

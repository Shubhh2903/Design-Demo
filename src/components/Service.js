import React from "react";
import styled from "styled-components";
import Container from "../atoms/Container";
import FontStyle from "../font/FontStyle";
import bg from "../Image/bg.png";
import Toggle from "./Toggle";
import logoBg from "../Image/logo-bg.png";
import Facilty from "./Facilty";
function Service() {
  return (
    <>
      <Contant>
        <Container>
          <FontStyle />
          <Text>
            <span style={{ fontSize: "90px" }}>S</span>ervices
          </Text>
          <Header>
            <Wrapper>
              <Box>
                The heart of{" "}
                <span
                  style={{
                    fontFamily: "Lato-Heavy",
                    fontWeight: "800",
                    flexDirection: "column",
                  }}
                >
                  Everything we do
                </span>
              </Box>
              <SubHeading>
                Enterprise <Toggle />
                <Associate>Associate</Associate>
              </SubHeading>
            </Wrapper>
            <BgLogo>
              <LogoBG />
            </BgLogo>
          </Header>
          <Facilty/>
        </Container>
       
      </Contant>
    </>
  );
}

export default Service;

const Contant = styled.div`
  display: flex;
  background-image: url(${bg});
  background-size: contain;
  height: 1640px;
`;

const Text = styled.div`
  font-size: 55px;
  font-family: Lato-Bold;
  width: 364px;
  height: 108px;
  letter-spacing: 13.4px;
  color: #1b75bc;
  opacity: 0.12;
  margin-top: 158px;
`;

const Box = styled.div`
  width: 540px;
  height: 50px;
  font-family: Lato-Regular;
  font-size: 40px;
  line-height: 1.25;
  margin-top: 26px;
`;

const Associate = styled.div`
  font-family: Lato-Regular;
  font-size: 26px;
  color: #8b8d8f;
  margin-left: 19px;
`;

const LogoBG = styled.div`
  background-image: url(${logoBg});
  width: 532px;
  height: 226px;
  background-size: cover;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SubHeading = styled.div`
  margin-top: 47px;
  font-family: Lato-Medium;
  font-size: 26px;
  color: #111111;
  display: flex;
  align-items: center;
`;
const BgLogo = styled.div``;

const Wrapper = styled.div`
  flex-direction: row;
`;

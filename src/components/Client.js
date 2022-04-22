/** @format */
import bg from "../Image/bg.png";
import React from "react";
import styled from "styled-components";
function Client() {
  return (
    <div>
      <Contant>
        <Wrapper>
          <div>
            <Head>
              <span style={{ fontSize: "90px" }}>O</span>ur{" "}
              <span style={{ fontSize: "90px" }}>C</span>lients
            </Head>
            <SubHeading>
              We help growing <span style={{fontFamily:"Lato-Heavy"}}>Companies move further, faster</span>
            </SubHeading>
          </div>
        </Wrapper>
      </Contant>
    </div>
  );
}

export default Client;
const Contant = styled.div`
  display: flex;
  background-image: url(${bg});
  background-size: contain;
  height: 1640px;
  background-repeat: no-repeat;
  margin-top: 100px;
`;

const Head = styled.div`
  font-size: 60px;
  font-family: Lato-Bold;
  letter-spacing: 18.4px;
  font-weight: bold;
  color: #dbe8f3;
  margin-top: 158px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-left: 115px;
`;

const SubHeading = styled.div`
  font-family: Lato-Regular;
  font-size: 38px;
  line-height: 50px;
  color: #0f273b;
  margin-top:26px;
`;

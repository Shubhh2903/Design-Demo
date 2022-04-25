/** @format */
import bg from "../Image/bg.png";
import styled from "styled-components";
import Company from "./Company";

function Client() {
  return (
    < >
      <Contant>
        <Wrapper>
          <div style={{width:"100%"}} >
            <Head>
              <span style={{ fontSize: "90px" }}>O</span>ur{" "}
              <span style={{ fontSize: "90px" }}>C</span>lients
            </Head>
            <Subwrapper>
              <SubHeading>
                We help growing{" "}
                <span style={{ fontFamily: "Lato-Heavy" }}>
                  Companies move further, faster
                </span>
              </SubHeading>
            </Subwrapper>
            <Company/>
          </div>
        </Wrapper>
      </Contant>
    </>
  );
}

export default Client;
const Subwrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contant = styled.div`
  display: flex;
  background-image: url(${bg});
  background-size: contain;
  height: 1458px;
  background-repeat: no-repeat;
  margin-top: 100px;
  width:100%;
  
`;

const Head = styled.div`
  font-size: 60px;
  font-family: Lato-Bold;
  letter-spacing: 18.4px;
  font-weight: bold;
  color: #dbe8f3;
  margin-top: 158px;
  padding-left:75px;
`;
const Wrapper = styled.div`
  display: flex;
  padding-left:75px;
  width:100%;

`;

const SubHeading = styled.div`
  font-family: Lato-Regular;
  font-size: 38px;
  line-height: 50px;
  color: #0f273b;
  margin-top: 26px;
  padding-left:75px;
`;

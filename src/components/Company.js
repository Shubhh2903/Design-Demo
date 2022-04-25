/** @format */

import React from "react";
import styled, {css} from "styled-components";
import bit from "../Image/bitmap.png";
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
        <Test>
          <Test2 backgroundImage={bit} />
        </Test>
        <Test active>
          <Test2 backgroundImage={facebook} />
        </Test>
        <Test>
          <Test2 backgroundImage={yahoo} />
        </Test>
        <Test>
          <Test2 backgroundImage={google} />
        </Test>
        <Test>
          <Test2 backgroundImage={mint} />
        </Test>
        <Test>
          <Test2 backgroundImage={guess} />
        </Test>
        <Test>
          <Test2 backgroundImage={kreation} />
        </Test>
        <Test>
          <Test2 backgroundImage={vital} />
        </Test>
        <Test>
          <Test2 backgroundImage={never} />
        </Test>
        <Test>
          <Test2 backgroundImage={amazon} />
        </Test>
        <Test>
          <Test2 backgroundImage={insta} />
        </Test>
        <Test>
          <Test2 backgroundImage={rooter} />
        </Test>
      </Content>
    </>
  );
}

export default Company;

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 167px;
  background-color: #f7f9fb;
  ${({active}) => active && css`
    background-color: #fff;
    box-shadow: -9px 3px 20px 0 rgba(0, 0, 0, 0.08);
    transform: scale(1.008);
  `}
`;

const Test2 = styled.div`
  display: flex;
  width: 70%;
  height:50%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position:center;
`;

const Content = styled.div`
  display: grid;
  margin-top: 100px;
  grid-template-columns: repeat(auto-fill, minmax(366px, 1fr));
  gap: 1px;
  background-color: #cfd9e2;
  margin-right:40px;

`;

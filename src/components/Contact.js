/** @format */

import React from "react";
import styled from "styled-components";
import laptop from "../Image/laptop-img.png";
function Contact() {
  return (
    <div>
      <Wrapper>
        <Heading>
          <span style={{ fontSize: "90px" }}>C</span>ontact{" "}
          <span style={{ fontSize: "90px" }}>U</span>s{" "}
          <span style={{ fontSize: "90px" }}>T</span>oday
        </Heading>
        <SubHeading>
          We are{" "}
          <span style={{ fontFamily: "Lato-Heavy" }}>Here to help you</span>
        </SubHeading>
        <Form>
          <Subwrapper>
            <FirstName placeholder='First Name'></FirstName>
            <LastName placeholder='Last Name'></LastName>
          </Subwrapper>
          <Info>
            <Email placeholder='Email'></Email>
            <Subject placeholder='Subject'></Subject>
          </Info>
          <TextArea placeholder='Message'></TextArea>
          <ContactUs>Contact Us</ContactUs>
        </Form>
        <Img>
          <Laptop />
        </Img>
      </Wrapper>
    </div>
  );
}

export default Contact;
const ContactUs = styled.button`
  width: 239px;
  height: 62px;
  margin-top:68px;
  font-size:18px;
  bordar-radius: 2px;
  border: solid 2px #fea825;
  background-color: #fea825;
  color: #ffffff;
  font-family: Lato-Bold;
  cursor: pointer;
`;
const Img = styled.div`
  display:flex;
  justify-content: end;
`;
const Laptop = styled.div`
  background-image: url(${laptop});
  width: 510px;
  height: 609px;
  background-size: contain;
  background-repeat: no-repeat;

`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float:left;
`;

const TextArea = styled.textarea`
  width: 743px;
  height: 157px;
  padding-left: 15px;
  border-radius: 2px;
  border: solid 1px #c7d7e4;
  color: #c7d7e4;
  font-family: Lato-Regular;
  font-size: 18px;
  margin-top: 30px;
`;
const Subject = styled.input`
  width: 352px;
  height: 58px;
  border-radius: 2px;
  border: solid 1px #c7d7e4;
  color: #c7d7e4;
  align-items: center;
  font-family: Lato-Regular;
  font-size: 18px;
  margin-left: 30px;
  padding-left: 15px;
`;
const Email = styled.input`
  padding-left: 15px;
  width: 352px;
  height: 58px;
  border-radius: 2px;
  border: solid 1px #c7d7e4;
  color: #c7d7e4;
  align-items: center;
  font-family: Lato-Regular;
  font-size: 18px;
`;
const Info = styled.div`
  display: flex;
  margin-top: 30px;
`;
const Subwrapper = styled.div`
  display: flex;
  margin-top: 84px;
`;
const FirstName = styled.input`
  width: 352px;
  height: 58px;
  border-radius: 2px;
  border: solid 1px #c7d7e4;
  color: #c7d7e4;
  align-items: center;
  font-family: Lato-Regular;
  font-size: 18px;
  padding-left: 15px;
`;
const LastName = styled.input`
  padding-left: 15px;
  width: 352px;
  height: 58px;
  border-radius: 2px;
  border: solid 1px #c7d7e4;
  color: #c7d7e4;
  align-items: center;
  font-family: Lato-Regular;
  font-size: 18px;
  margin-left: 30px;
`;
const Wrapper = styled.div`
  margin-top: 60px;
  margin-left: 115px;
`;
const Heading = styled.div`
  font-family: Lato-Bold;
  font-size: 60px;
  letter-spacing: 19px;
  font-weight: bold;
  color: #dbe8f3;
`;

const SubHeading = styled.div`
  font-family: Lato-Regular;
  font-size: 38px;
  color: #0f273b;
  margin-top: 26px;
  line-height: 50px;
`;

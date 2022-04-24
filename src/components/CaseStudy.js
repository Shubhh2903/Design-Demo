/** @format */
import logoBg from "../Image/logo-bg.png";
import React, { useRef } from "react";
import styled from "styled-components";
import rec from "../Image/rectangle.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import BG from "../Image/home-banner/case.png";

import "slick-carousel/slick/slick-theme.css";

function CaseStudy() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerMode: true,
    arrows: false,
  };
  const sliderEl = useRef(null);
  const handleSlide = (side) => () =>
    side ? sliderEl.current.slickNext() : sliderEl.current.slickPrev();

  return (
    <div>
      <Content>
        <Header>
          <span style={{ fontSize: "90px" }}>C</span>ase{" "}
          <span style={{ fontSize: "90px" }}>S</span>tudies
        </Header>
        <SubHeading>
          Lorem ipsum dolor{" "}
          <span style={{ fontFamily: "Lato-Heavy" }}>Dolore magna aliqua</span>
        </SubHeading>
      </Content>
      <Nav>
        <Slider {...settings} ref={sliderEl}>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
          <div>
            <div>
              <img src={BG} />
            </div>
          </div>
        </Slider>
        <Btn>
          <Button onClick={handleSlide(0)}>←</Button>
          <Button onClick={handleSlide(1)}>→</Button>
        </Btn>
        <Container>
          <Head>Smart Savvy Academy</Head>
          <Data>
            Smart Savvy is a unique recruitment agency that specializes in
            marketing, communications, and sales roles. They work with
            businesses and job seekers, helping companies find the perfect fit
            for their teams.
            <br />
            <br />
            They now offer training development options for businesses looking
            to level up their internal employees, through the Smart Savvy
            Academy.
          </Data>
        </Container>
      </Nav>
      <LogoBG />
    </div>
  );
}

export default CaseStudy;
const LogoBG = styled.div`
  background-image: url(${logoBg});
  width: 532px;
  height: 226px;
  background-size: cover;
`;

const Content = styled.div`
  margin-left: 117px;
  margin-top: 60px;
`;
const Header = styled.div`
  font-size: 60px;
  font-family: Lato-Bold;
  color: #1b75bc;
  letter-spacing: 19px;
  font-weight: bold;
  opacity: 0.12;
`;
const SubHeading = styled.div`
  font-family: Lato-Regular;
  font-size: 38px;
  line-height: 50px;
  color: #0f273b;
  margin-top: 26px;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 75px;
  height: 75px;
  background-color: #fac87c;
  color: white;
  font-size: 20px;
  border: 1px solid #fac87c;
  border-radius: 2px;
  flex-direction: row;
  cursor: pointer;
  margin-left: 15px;
`;
const Nav = styled.div`
  margin-left: 150px;
  position: relative;
`;

const Btn = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;
const Container = styled.div`
  background-image: url(${rec});
  height: 500px;
  width: 718px;
  background-size: cover;
  background-repeat: no-repeat;
  margin: -310px 0 0 580px;
  position: absolute;
`;

const Head = styled.div`
  font-family: Lato-black;
  color: #1b75bc;
  font-size: 45px;
  text-align: center;
  margin-top: 85px;
`;

const Data = styled.div`
  font-family: Lato-Regular;
  font-size: 18px;
  line-height: 31px;
  text-align: left;
  margin: 25px 129px 180px 85px;
`;

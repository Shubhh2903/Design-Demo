import React, {useRef} from "react";
import styled from "styled-components";

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
  const handleSlide = side => () => side ? sliderEl.current.slickNext() : sliderEl.current.slickPrev()
  
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
      </Nav>
    </div>
  );
}

export default CaseStudy;

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
`;

const Btn = styled.div`
    display:flex;
    margin-left:auto;
    margin-right:auto;
    width:30%;
`

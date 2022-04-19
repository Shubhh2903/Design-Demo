import React,{useState} from "react";
import styled from "styled-components";

const NavLink = styled.nav`
  display: flex;

  color: #ffffff;
 
`;
const NavbarItem = styled.div`
  font-family: Lato-Semibold;
  font-size: 17px;
  latter-spacing: 1.42px;
  cursor: pointer;
  font-weight: 600;
  margin-left:36px;
`;

const PopupComponent = styled.div`
  width:237px;
  height:146px;
  border-radius:2px;
  background-color:#ffff;
  margin:50px 96px 726px 1117px;
`

function Navbar() {
  const [isPopup,setisPopup] = useState(false);
  return (
      <NavLink>
        <NavbarItem onClick={() => setisPopup(!isPopup)}>Home</NavbarItem>
        <NavbarItem>About Us</NavbarItem>
        <NavbarItem>Services</NavbarItem>
        <NavbarItem>Cummunity</NavbarItem>
        <NavbarItem>Contact Us</NavbarItem>
      </NavLink> 

  );
}

export default Navbar;

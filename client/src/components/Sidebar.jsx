import React from 'react'
import styled from 'styled-components'
import {HomeRounded, CloseRounded, SearchRounded, LogoutRounded, LightModeRounded, UploadRounded, FavoriteRounded, DarkModeRounded} from "@mui/icons-material"
import LogoImage from "../images/Logo.png";
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  width: 33px;
  display: flex;
  background-color: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }  
`;

const Logo = styled.div`
  width: 100%;
  color: ${({theme})=>theme.primary};
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
  padding-left: 14px;
`;

const Image = styled.img`
  height: 35px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-item : center;
  justify-content: center;
`;
const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
  &:hover{
    cursor: pointer;
  }
`;
const Element = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  gap: 12px;
  cursor: pointer;
  color: ${({theme}) => theme.text_secondary};
  // width: 100%;
  &:hover{
    background-color: ${({theme}) => theme.text_secondary + 50};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledHomeRounded = styled(HomeRounded)`
  padding-top: 10.5px
`;
const StyledCloseRounded = styled(CloseRounded)`
  padding-top: 20px;
  padding-right: 20px;
`;
const StyledSearchRounded = styled(SearchRounded)`
  padding-top: 10.5px
`;
const StyledFavouriteRounded = styled(FavoriteRounded)`
  padding-top: 10.5px;
`;
const StyledUploadRounded = styled(UploadRounded)`
  padding-top: 10.5px
`;
const StyledLightModeRounded = styled(LightModeRounded)`
  padding-top: 10.5px;
`;
const StyledLogoutRounded = styled(LogoutRounded)`
  padding-top: 10.5px
`;
const StyledDarkModeRounder = styled(DarkModeRounded)`
  padding-top: 10.5px
`;

const HR = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({theme}) => theme.text_secondary + 50};
  margin: 10px 0px;
`;

const Sidebar = ({menuOpen, setMenuOpen, setDarkMode, darkMode}) => {

  const menuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <StyledHomeRounded/>
    },
    {
      link: "/search",
      name: "Search",
      icon: <StyledSearchRounded/>
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <StyledFavouriteRounded/>
    }
  ]  

  const button = [
    {
      fun: ()=>console.log("Upload"),
      name: "Upload",
      icon: <StyledUploadRounded/>
    },
    {
      fun: ()=> setDarkMode(!darkMode),
      name: darkMode? "Light Mode" : "Dark Mode",
      icon: darkMode? <StyledLightModeRounded/>: <StyledDarkModeRounder/>
    },
    {
      fun: ()=>console.log("Upload"),
      name: "LogOut",
      icon: <StyledLogoutRounded/>
    }
  ]

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
      <Logo>
        <Image src={LogoImage}/>
        PODSTEAM</Logo>
      <Close onClick={()=>{setMenuOpen(!menuOpen)}}>
        <StyledCloseRounded/>
      </Close>
      </Flex>

      {menuItems.map((item)=>(
        <StyledLink to={item.link} key={item.name}>
          <Element>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Element>
        </StyledLink>
      ))}

      <HR/>

      {button.map((item) => (
        <Element onClick={item.fun} key={item.name}>
          {item.icon}
          <NavText>{item.name}</NavText>
        </Element>
      ))}
    </MenuContainer>
  )
}

export default Sidebar

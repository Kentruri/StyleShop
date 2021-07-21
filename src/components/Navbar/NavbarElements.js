import styled from "styled-components";
import { Link } from 'react-router-dom'
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: ${({transparent}) => (transparent ? 'transparent' : '#000')};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavbarContainer = styled(Container)`
display:flex;
justify-content: space-between;
height: 80px;
${Container}
`
export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavImg = styled.img`
width: 120px;

`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
font-family: 'Open Sans', sans-serif;

`

export const NavMenuCenter = styled.ul`
display:flex;
align-items: center;
list-style: none;
text-align: center;
font-family: 'Open Sans', sans-serif;
`

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

`


export const NavLinks = styled(Link)`
color: #fff;
display:flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
&:hover {
    border-bottom: 2px solid #e1f6f4;
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
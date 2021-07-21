import React,{useState,useEffect} from 'react'
import { Nav, NavLogo, NavImg, NavItem, NavLinks, NavBtnLink, NavMenu, NavbarContainer,NavMenuCenter } from './NavbarElements'
import { Button } from '../../globalStyles';
import { useLocation } from 'react-router-dom'
const Navbar = () => {
    const location = useLocation();
    const [transparent,setTransparent] = useState(false);
    const { pathname } = location;

    useEffect(() => {
        pathname == "/" ? setTransparent(true):setTransparent(false)

    })
    return (
        
        <Nav transparent={transparent}>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavImg src="https://res.cloudinary.com/kentruri/image/upload/v1626841491/Logo_tukevm.png" />
                </NavLogo>

                <NavMenuCenter>

                    <NavItem>
                        <NavLinks>
                            Search
                        </NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks>
                            Your Cart
                        </NavLinks>
                    </NavItem>

                    </NavMenuCenter>
                        <NavMenu>


                            <NavItem>
                                <NavLinks to="/Register">
                                    Register
                                </NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavBtnLink to="/Login">
                                    <Button primary>Login</Button>
                                </NavBtnLink>
                            </NavItem>

                        </NavMenu>
            </NavbarContainer>
        </Nav>
                )
}

                export default Navbar

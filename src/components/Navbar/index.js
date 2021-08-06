import React, { useState, useEffect } from 'react'
import { Nav, NavLogo, NavImg, NavItem, NavLinks, NavBtnLink, NavMenu, NavbarContainer, NavMenuCenter } from './NavbarElements'
import {connect} from 'react-redux'
import { Button } from '../../globalStyles';
import { useLocation } from 'react-router-dom'
import {auth} from '../../firebase/Utils'
const Navbar = props => {
    const { currentUser } = props;
    const location = useLocation();
    const [transparent, setTransparent] = useState(false);
    const { pathname } = location;

    useEffect(() => {
        pathname === "/" ? setTransparent(true) : setTransparent(false)

    },[pathname])
    return (

        <Nav transparent={transparent}>



            {!currentUser && (

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
            )}

            {currentUser && (
            
                <NavbarContainer>
          
                    <NavLogo to="/">
                        <NavImg src="https://res.cloudinary.com/kentruri/image/upload/v1626841491/Logo_tukevm.png" />
                    </NavLogo>
                    <NavMenu>

                        
                    <NavItem>
                            <NavLinks to="/Dashboard">
                               My account 
                            </NavLinks>
                        </NavItem>


                        <NavItem>
                            <NavLinks onClick={() => auth.signOut()}>
                               LogOut 
                            </NavLinks>
                        </NavItem>

                        

                    </NavMenu>
                </NavbarContainer>
            )}


        </Nav>
    )
};

Navbar.defaultProps = {
    currentUser: null
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps,null)(Navbar);

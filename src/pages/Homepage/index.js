import React from 'react';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import styled from 'styled-components'

const HomeContainer = styled.div`
 background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url("https://res.cloudinary.com/kentruri/image/upload/v1626734426/pexels-ksenia-chernaya-3965545_tdkcnr.jpg");
  height: 100vh;
  margin-top:-80px;
  background-position: center;
  background-size: cover;
`
const Homepage = props => {
    return (
        <HomeContainer>   
            <Header/>          
        </HomeContainer>
    );
}

export default Homepage;

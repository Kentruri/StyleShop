import React from 'react';
import styled from 'styled-components'

const HeaderContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);


`

const HeaderItems = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 2rem;
width: 650px;
color: #fff;
line-height: 1;
font-weight: bold;
`

const HeaderH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e1f6f4;
  letter-spacing: 3px;
`

const HeaderP = styled.p`
 font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`

const HeaderBtn = styled.button`
 font-size: 1.4rem;
  padding: 1rem 4rem;
  margin-right: 3rem;
  border: none;
  border-radius: 2px;
  background: #4B59F7;
  color: #fff;
  transition: 0.2s ease-out;
  &:hover {
    background: #0467FB;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`

const HeaderBtnWrap = styled.div`


`

const Header = () => {
  return (
    <HeaderContent>
      <HeaderItems>
        <HeaderH1>LA MEJOR ROPA DEL MERCADO</HeaderH1>
        <HeaderP>Encuentrala aqui</HeaderP>
        <HeaderBtnWrap>
          <HeaderBtn>Hombre</HeaderBtn>
          <HeaderBtn>Mujer</HeaderBtn>
        </HeaderBtnWrap>
      </HeaderItems>
    </HeaderContent>
  );
}

export default Header;

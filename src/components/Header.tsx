import React from 'react';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, LoginBtn } from '../styles/Header-styled';
const Header: React.FC = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <LogoImg />
          <Logo>Husk</Logo>
        </LogoWrapper>
        <LoginBtn>Login</LoginBtn>
      </HeaderWrapper>
    </>
  );
};

export default Header;

import React from 'react';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, LoginButton } from './index.style';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Logo>Husk</Logo>
      </LogoWrapper>
      <LoginButton type="primary" href="/sign-in">
        Login
      </LoginButton>
    </HeaderWrapper>
  );
};

export default Header;

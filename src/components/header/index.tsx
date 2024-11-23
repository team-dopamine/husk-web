import React from 'react';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, LoginButton } from './index.style';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Logo>Husk</Logo>
      </LogoWrapper>
      <LoginButton type="primary">Login</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;

import React from 'react';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, LoginButton } from './index.style';

interface HeaderProps {
  logoHref?: string;
  loginButtonHref?: string;
  loginButtonText?: string;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ logoHref = '/', loginButtonHref = '/sign-in', loginButtonText = 'Login', isLoggedIn, onLogout }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Logo href={logoHref}>Husk</Logo>
      </LogoWrapper>
      {isLoggedIn ? (
        <LoginButton type="primary" onClick={onLogout}>
          Logout
        </LoginButton>
      ) : (
        <LoginButton type="primary" href={loginButtonHref}>
          {loginButtonText}
        </LoginButton>
      )}
    </HeaderWrapper>
  );
};

export default Header;

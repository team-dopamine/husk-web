import React, { useContext } from 'react';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, LoginButton } from './index.style';
import postSignOut from 'api/sign-out';
import { AuthContext } from 'api/context/auth-context';

interface HeaderProps {
  logoHref?: string;
  goToLoginPage?: string;
}

const Header: React.FC<HeaderProps> = ({ logoHref = '/', goToLoginPage = '/sign-in' }) => {
  const { isLoggedIn, logout, accessToken, refreshToken } = useContext(AuthContext)!;

  const handleLogout = async () => {
    if (!accessToken || !refreshToken) {
      console.error('로그아웃 실패: 토큰이 없습니다.');
      return;
    }
    try {
      await logout(accessToken, refreshToken);
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Logo href={logoHref}>Husk</Logo>
      </LogoWrapper>

      {isLoggedIn ? (
        <LoginButton type="primary" onClick={handleLogout}>
          Logout
        </LoginButton>
      ) : (
        <LoginButton type="primary" href={goToLoginPage}>
          Login
        </LoginButton>
      )}
    </HeaderWrapper>
  );
};

export default Header;

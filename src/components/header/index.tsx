import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoWrapper, Logo, LoginButton, AuthBox } from './index.style';
import { AuthContext } from 'api/context/auth-context';
import { ReactComponent as HUSK } from 'assets/HUSK.svg';

interface HeaderProps {
  logoHref?: string;
  goToLoginPage?: string;
}

const Header: React.FC<HeaderProps> = ({ logoHref = '/', goToLoginPage = '/signin' }) => {
  const { isLoggedIn, logout, withdraw, accessToken, refreshToken } = useContext(AuthContext)!;

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
      <LogoWrapper as={Link} to="/">
        <HUSK style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <Logo>HUSK</Logo>
      </LogoWrapper>
      <AuthBox>
        {isLoggedIn ? (
          <LoginButton type="primary" onClick={handleLogout}>
            Logout
          </LoginButton>
        ) : (
          <LoginButton type="primary" href={goToLoginPage}>
            Login
          </LoginButton>
        )}
      </AuthBox>
    </HeaderWrapper>
  );
};

export default Header;

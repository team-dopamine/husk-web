import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'api/context/auth-context';
import useModal from '@hooks/useModal';
import LanguageModal from './modal';
import { ReactComponent as HUSK } from 'assets/HUSK.svg';
import { ReactComponent as Logout } from 'assets/Logout.svg';
import { ReactComponent as Login } from 'assets/Login.svg';
import { ReactComponent as Language } from 'assets/Language.svg';
import { HeaderWrapper, LogoWrapper, LanguageWrapper, Logo, LanguageButton, LogoutButton, AuthBox } from './index.style';

interface HeaderProps {
  logoHref?: string;
  goToLoginPage?: string;
}

const Header: React.FC<HeaderProps> = ({ goToLoginPage = '/sign-in' }) => {
  const { logout, isLoggedIn, accessToken, refreshToken } = useContext(AuthContext)!;

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

  const { isOpen, toggleModal, closeModal } = useModal();
  const onclickFunction = () => {
    toggleModal();
  };

  return (
    <HeaderWrapper>
      <LogoWrapper as={Link} to="/">
        <HUSK style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <Logo>HUSK</Logo>
      </LogoWrapper>
      <AuthBox>
        <LanguageWrapper>
          <LanguageButton onClick={onclickFunction} aria-label="언어 변경">
            <Language width={24} height={24}></Language>
          </LanguageButton>
        </LanguageWrapper>
        {isOpen && <LanguageModal onClose={closeModal} />}
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout}>
            <Logout />
          </LogoutButton>
        ) : (
          <Link to={goToLoginPage}>
            <Login width={24} height={24} style={{ color: 'black' }} />
          </Link>
        )}
      </AuthBox>
    </HeaderWrapper>
  );
};

export default Header;

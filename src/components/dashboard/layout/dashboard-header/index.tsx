import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'api/context/auth-context';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, UserActionButtons, EditProfileButton, LogoutButton } from './index.style';

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  const { logout, accessToken, refreshToken } = useContext(AuthContext)!;

  const handleLogout = async () => {
    if (!accessToken || !refreshToken) {
      console.error('로그아웃 실패: 토큰이 없습니다.');
      return;
    }
    try {
      await logout(accessToken, refreshToken);
      navigate('/');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg />
        <Logo href="/">Termius App</Logo>
      </LogoWrapper>
      <UserActionButtons>
        <EditProfileButton href="#">정보수정</EditProfileButton>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserActionButtons>
    </HeaderWrapper>
  );
};

export default DashboardHeader;

import React, { useContext } from 'react';
import { AuthContext } from 'api/context/auth-context';
import { HeaderWrapper, LogoWrapper, LogoImg, Logo, UserActionButtons, ActionButton } from './index.style';

const DashboardHeader: React.FC = () => {
  const { logout, accessToken, refreshToken } = useContext(AuthContext)!;

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
        <Logo href="/">Termius App</Logo>
      </LogoWrapper>
      <UserActionButtons>
        <ActionButton href="#">정보수정</ActionButton>
        <ActionButton onClick={handleLogout}>Logout</ActionButton>
      </UserActionButtons>
    </HeaderWrapper>
  );
};

export default DashboardHeader;

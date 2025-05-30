import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '@api/context/auth-context';
import { HeaderWrapper, LogoWrapper, Logo, UserActionButtons, EditProfileButton, LogoutButton } from './index.style';
import { ReactComponent as HUSK } from '@assets/HUSK.svg';
import ResetModal from '@components/dashboard/modals/reset-password';

const DashboardHeader: React.FC = () => {
  const navigate = useNavigate();
  const { logout, accessToken, refreshToken } = useContext(AuthContext)!;
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <LogoWrapper as={Link} to="/">
        <HUSK style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <Logo>HUSK</Logo>
      </LogoWrapper>
      <UserActionButtons>
        <EditProfileButton onClick={() => setIsModalOpen(true)}>정보수정</EditProfileButton>
        <ResetModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </UserActionButtons>
    </HeaderWrapper>
  );
};

export default DashboardHeader;

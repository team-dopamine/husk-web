import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '@api/context/auth-context';
import { HeaderWrapper, LogoWrapper, Logo, UserActionButtons, UserAccountIconWrapper, LogoutIconWrapper } from './index.style';
import { ReactComponent as HUSK } from '@assets/HUSK.svg';
import UpdateModal from '@components/dashboard/modals/update-password';
import { ReactComponent as UserAccount } from '@assets/UserAccount.svg';
import { ReactComponent as Logout } from '@assets/Logout.svg';

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
        <UserAccountIconWrapper onClick={() => setIsModalOpen(true)}>
          <UserAccount />
        </UserAccountIconWrapper>
        <UpdateModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
        <LogoutIconWrapper onClick={handleLogout}>
          <Logout />
        </LogoutIconWrapper>
      </UserActionButtons>
    </HeaderWrapper>
  );
};

export default DashboardHeader;

import { SidebarWrapper, SidebarItem, ButtonImg } from './index.style';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <SidebarItem onClick={() => navigate('#')}>
        <ButtonImg>🚀</ButtonImg>SSH Connection
      </SidebarItem>
      <SidebarItem onClick={() => navigate('/dashboard/keychain-page')}>
        <ButtonImg>🔒</ButtonImg>Keychain
      </SidebarItem>
      <SidebarItem onClick={() => navigate('#')}>
        <ButtonImg>💻</ButtonImg>User Terminal
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;

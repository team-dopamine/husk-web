import { SidebarWrapper, SidebarItem, ButtonImg } from './index.style';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarWrapper>
      <SidebarItem onClick={() => navigate('/dashboard/keychains')}>
        <ButtonImg>🔐</ButtonImg>Keychain
      </SidebarItem>
      <SidebarItem onClick={() => navigate('/dashboard/connections')}>
        <ButtonImg>🚀</ButtonImg>SSH Connection
      </SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;

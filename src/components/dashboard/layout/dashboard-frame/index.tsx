import { Outlet } from 'react-router-dom';
import { DashboardLayout } from './index.style';
import Sidebar from '@components/dashboard/layout/dashboard-sidebar';
import DashboardHeader from '@components/dashboard/layout/dashboard-header';

const DashboardFrame: React.FC = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <Sidebar />
      <Outlet />
    </DashboardLayout>
  );
};

export default DashboardFrame;

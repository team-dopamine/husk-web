import DashboardHeader from '@components/dashboard-header';
import Sidebar from '@components/sidebar';
import { DashboardLayout } from './index.style';

const DashboardFrame: React.FC = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <Sidebar />
    </DashboardLayout>
  );
};

export default DashboardFrame;

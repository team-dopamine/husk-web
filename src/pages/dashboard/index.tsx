import { useEffect, useState, useCallback } from 'react';
import Content from './content';

const ONBOARD_KEY = 'onboard:dashboard:v1';

const Dashboard = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(ONBOARD_KEY) === '1';
    if (!dismissed) setIsGuideOpen(true);
  }, []);

  const handleCloseGuide = useCallback((dontShowAgain?: boolean) => {
    if (dontShowAgain) localStorage.setItem(ONBOARD_KEY, '1');
    setIsGuideOpen(false);
  }, []);

  return (
    <>
      <Content open={isGuideOpen} onClose={handleCloseGuide} />
    </>
  );
};

export default Dashboard;

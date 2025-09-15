import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import Content from './content';

const COOKIE_KEY = 'husk.guide.dismissed';
const HIDE_DAYS = 7;

const Dashboard = () => {
  const [isGuideOpen, setIsGuideOpen] = useState(() => Cookies.get(COOKIE_KEY) !== '1');

  const handleCloseGuide = useCallback((dontShowAgain?: boolean) => {
    if (dontShowAgain) {
      Cookies.set(COOKIE_KEY, '1', { expires: HIDE_DAYS, path: '/' });
    }
    setIsGuideOpen(false);
  }, []);

  return <Content open={isGuideOpen} onClose={handleCloseGuide} />;
};

export default Dashboard;

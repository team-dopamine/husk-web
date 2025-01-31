import { useState, useEffect } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import { Layout } from './index.style';
import { Outlet, useNavigate } from 'react-router-dom';

const Frame = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoginState);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedLoginState = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(updatedLoginState);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };
  console.log('Frame - handleLoginSuccess:', { handleLoginSuccess });
  return (
    <>
      <Layout>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Outlet context={{ handleLoginSuccess }} />
        <Footer />
      </Layout>
    </>
  );
};

export default Frame;

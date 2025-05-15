import { useState, useEffect } from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import { Layout } from './index.style';
import { Outlet, useNavigate } from 'react-router-dom';

const Frame = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const storedLoginState = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedLoginState);
  }, []);

  const handleLoginSuccess = () => {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <>
      <Layout>
        <Header />
        <Outlet context={{ handleLoginSuccess }} />
        <Footer />
      </Layout>
    </>
  );
};

export default Frame;

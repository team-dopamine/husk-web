import React from 'react';
import './App.css';
import Main from '@pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignIn from '@pages/sign-in';
import SignUp from '@pages/sign-up';
import ReadTerms from '@pages/sign-up/content/read-terms';
import Password from '@pages/sign-up/content/password';
import Frame from '@components/frame';
import AuthSignIn from '@pages/sign-in/sign-in-email';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route index element={<Main />} />
            <Route path="sign-in" element={<SignIn />} />
            <Route path="auth-sign-in" element={<AuthSignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="password" element={<Password />} />
            <Route path="read-terms" element={<ReadTerms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;

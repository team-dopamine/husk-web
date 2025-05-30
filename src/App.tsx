import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from 'api/context/auth-provider';
import Frame from '@components/frame';
import DashboardFrame from '@components/dashboard/layout/dashboard-frame';
import Main from '@pages/main';
import SignIn from '@pages/sign-in';
import AuthSignIn from '@pages/sign-in/sign-in-email';
import SignUp from '@pages/sign-up';
import ReadTerms from '@pages/sign-up/content/terms';
import Password from '@pages/sign-up/content/password';
import Dashboard from '@pages/dashboard';
import KeychainPage from '@pages/keychain';
import SshConnectionPage from '@pages/ssh-connection';
import TerminalPage from '@pages/terminal';
import GlobalStyle from '@styles/global/GlobalStyle';
import ResetPassword from '@pages/reset-password';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={clientId}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Frame />}>
                <Route index element={<Main />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="auth/signin" element={<AuthSignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="terms" element={<ReadTerms />} />
                <Route path="password" element={<Password />} />
                <Route path="password/reset" element={<ResetPassword />} />
              </Route>
              <Route path="/dashboard" element={<DashboardFrame />}>
                <Route index element={<Dashboard />} />
                <Route path="keychains" element={<KeychainPage />} />
                <Route path="connections" element={<SshConnectionPage />} />
              </Route>
              <Route path="terminal" element={<TerminalPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </GoogleOAuthProvider>
    </>
  );
};

export default App;

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
import ReadTerms from '@pages/sign-up/content/read-terms';
import Password from '@pages/sign-up/content/password';
import ResetPassword from '@pages/reset-password';
import TempUpdatePasswordConfirm from '@pages/temp-update-password/verify';
import TempUpdatePasswordSetting from '@pages/temp-update-password/setting';
import Dashboard from '@pages/dashboard';
import KeychainPage from '@pages/keychain';
import SshConnectionPage from '@pages/ssh-connection';
import TestPage from '@pages/ssh-connection/test-page';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Frame />}>
              <Route index element={<Main />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="auth-sign-in" element={<AuthSignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="password" element={<Password />} />
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="read-terms" element={<ReadTerms />} />
              <Route path="temp-update-password-confirm" element={<TempUpdatePasswordConfirm />} />
              <Route path="temp-update-password-setting" element={<TempUpdatePasswordSetting />} />
            </Route>
            <Route path="/dashboard" element={<DashboardFrame />}>
              <Route index element={<Dashboard />} />
              <Route path="keychain-page" element={<KeychainPage />} />
              <Route path="sshConnection-page" element={<SshConnectionPage />} />
              <Route path="test-page" element={<TestPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;

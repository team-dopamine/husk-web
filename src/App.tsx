import React from 'react';
import './App.css';
import Main from '@pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '@pages/sign-in';
import SignUp from '@pages/sign-up';
import ReadTerms from '@pages/sign-up/content/read-terms';
import Password from '@pages/sign-up/content/password';
import Frame from '@components/frame';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<Main />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="password" element={<Password />} />
          <Route path="read-terms" element={<ReadTerms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

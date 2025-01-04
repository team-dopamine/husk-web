import React from 'react';
import './App.css';
import Main from '@pages/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from '@pages/sign-in';
import SignUp from '@pages/sign-up';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

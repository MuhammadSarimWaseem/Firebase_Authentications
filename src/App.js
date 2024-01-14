import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import './App.css';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/Login/LoginPage' element={<LoginPage />} />
          <Route path='/SignUp/SignUpPage' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
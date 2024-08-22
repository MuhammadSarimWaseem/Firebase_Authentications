import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage'
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer />
    </Fragment>
  );
}

export default App;
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { MainPage } from './pages/mainPage/MainPage';
import { SignIn } from './pages/signin/SignIn';

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    )
}
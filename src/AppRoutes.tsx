import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import { MainPage } from './pages/mainPage/MainPage';
import { AuthOutlet } from './shared/outlets/auth';
import { InitOutlet } from './shared/outlets/init';
import { PrivateOutlet } from './shared/outlets/private';

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route element={<InitOutlet />}>
              <Route element={<AuthOutlet />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<PrivateOutlet />}>
                <Route path="/" element={<MainPage />} />
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    )
}
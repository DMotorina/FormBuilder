import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthOutlet } from './shared/outlets/auth';
import { InitOutlet } from './shared/outlets/init';
import { PrivateOutlet } from './shared/outlets/private';

import { Login } from './pages/login/Login';
import { Main } from './pages/main/Main';
import { NotFound } from './pages/notFound/NotFound';
import { Signup } from './pages/signup/Signup';
import { FormCreator } from './pages/formCreator/FormCreator';

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route element={<InitOutlet />}>
              <Route element={<AuthOutlet />}>
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<PrivateOutlet />}>
                <Route path="/" element={<Main />} />
              </Route>
            </Route>
            <Route path="/forms/:uuid" element={<FormCreator />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    )
}
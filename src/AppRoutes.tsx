import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthOutlet } from './shared/outlets/auth';
import { InitOutlet } from './shared/outlets/init';
import { PrivateOutlet } from './shared/outlets/private';

import { Login } from './pages/login/Login';
import { MainPage } from './pages/mainPage/MainPage';
import { NotFound } from './pages/notFound/NotFound';
import { Signup } from './pages/signup/Signup';
import { FormCreatorWrapper } from './pages/form/feartures/formWrappers/FormCreatorWrapper';
import { FormEditorWrapper } from './pages/form/feartures/formWrappers/FormEditorWrapper';


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
            <Route path="/forms/:dashboardUuid?" element={<FormCreatorWrapper  />} />
            <Route path="/forms/:formUuid/edit" element={<FormEditorWrapper />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    )
}
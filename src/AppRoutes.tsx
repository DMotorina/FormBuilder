import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthOutlet } from './shared/outlets/auth';
import { InitOutlet } from './shared/outlets/init';
import { PrivateOutlet } from './shared/outlets/private';

import { Login } from './pages/login/Login';
import { MainPage } from './pages/mainPage/MainPage';
import { NotFound } from './pages/notFound/NotFound';
import { Signup } from './pages/signup/Signup';
import { FormWrapper } from './pages/formWrapper/FormWrapper';

interface FormRouteInterface {
  path: string
  name: 'new' | 'edit'
}

const formRoutes: FormRouteInterface[] = [
  { path: "/forms/:dashboardUuid?", name: "new" },
  { path: "/forms/:formUuid/edit", name: "edit" },
]

const generateFormRoutes = (routes: FormRouteInterface[]): JSX.Element[] => {
  return routes.map(({ path, name }) => (
    <Route 
      key={name} 
      path={path} 
      element={<FormWrapper name={name} />} 
    />
  ))
}

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
            {generateFormRoutes(formRoutes)}
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    )
}
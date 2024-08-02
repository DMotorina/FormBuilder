import * as React from 'react';
import { Provider } from 'react-redux'
import './App.css'
import { AppRoutes } from './AppRoutes';
import { store } from './store';

export const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  )
}
import * as React from 'react';
import { Provider } from 'react-redux'
import { AppRoutes } from './AppRoutes';
import { store } from './store';
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </MantineProvider>
  )
}
import {blue, teal} from '@mui/material/colors';
import {
  createTheme,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import * as React from 'react';
import {Route, Routes} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import SnackSelectionPage from './pages/SnackSelectionPage';

export const App = () => {
  // TODO - Configure this using an environment variable.
  const isDarkMode = true;

  const theme = createTheme({
    palette: {
      primary: blue,
      secondary: teal,
      mode: isDarkMode ? 'dark' : 'light'
    }
  });

  return (
    <ThemeProvider theme={theme}>
      {/* This meta tag makes the mobile experience
      much better by preventing text from being tiny. */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0'/>

      {/* Properly themes the app. */}
      <CssBaseline/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SnackSelectionPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

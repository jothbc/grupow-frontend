import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './style/global';
import { AuthProvider } from './hooks/auth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;

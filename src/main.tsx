import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/components/App';
import GlobalStyle from './components/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@/utils/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

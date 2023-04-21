import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/fonts/Ubuntu-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url('/fonts/Ubuntu-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url('/fonts/Ubuntu-Bold.ttf') format('truetype');
        }

        * {
          margin: 0;
          padding: 0;
          outline:0;
          box-sizing:border-box;
        }

        html, body {
          font-family: 'Ubuntu', sans-serif;
          background: #eff5ff,
        }

        html, body, #root {
          height: 100%;
        }
      `;

export default GlobalStyle;

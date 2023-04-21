const theme = {
  colors: {
    white: '#fff',
    coolGray: '#9699ab',
    lightGray: '#d6d9e6',
    magnolia: '#f0f6ff',
    alabaster: '#fafbff',
    marineBlue: '#02295a',
    purplishBlue: '#473dff',
    pastelBlue: '#adbeff',
    lightBlue: '#bfe2fd',
    strawberryRed: '#ed3548',
  },
  breakpoints: {
    mobile: '375px',
    desktop: '1440px',
  },
} as const;

export type Theme = typeof theme;

export default theme;

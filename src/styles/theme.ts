import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    purple: {
      200: '#a578e3',
    },
    blue: {
      100: '#b5bcf3',
      800: '#38396d',
    },
    green: {
      200: '#c2f776',
    },
    pink: {
      100: '#f9bdd4',
    },
    gray: {
      200: '#fff5f2',
    },
  },
  fonts: {
    heading: 'Merriweather',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        background: '#fdfdfd',
        color: '#38396d',
      },
    },
  },
});

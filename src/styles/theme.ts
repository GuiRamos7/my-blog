import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    purple: {
      200: '#a578e3',
    },
    green: {
      200: '#c2f776',
    },
  },
  fonts: {
    heading: 'Merriweather',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
});

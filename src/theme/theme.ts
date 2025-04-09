// src/theme/theme.ts

import { createTheme } from '@mui/material/styles';

// Extend the palette type to include custom colors
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      lightBrown: string;
      darkBrown: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      lightBrown?: string;
      darkBrown?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // SaddleBrown
    },
    secondary: {
      main: '#DEB887', // BurlyWood
    },
    custom: {
      lightBrown: '#f5f5dc', // Beige/Cream
      darkBrown: '#5c4033', // Darker brown
    },
  },
});

export default theme;

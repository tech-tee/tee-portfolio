// src/theme/theme.d.ts
import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      lightBrown: string;
      caramel: string;
      mocha: string;
      chocolate: string;
      darkBrown: string;
      cream: string;
      accentRed: string;
    };
  }
  interface PaletteOptions {
    custom: {
      lightBrown?: string;
      caramel?: string;
      mocha?: string;
      chocolate?: string;
      darkBrown?: string;
      cream?: string;
      accentRed?: string;
    };
  }
}
// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#deb887', // burlywood
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5c4033', // deep brown
    },
    background: {
      default: '#fdf6f0', // soft cream
      paper: '#fff8ed',   // slightly deeper cream
    },
    text: {
      primary: '#1e1e1e', // soft black
      secondary: '#5c4033', // brownish text for accent
    },
    custom: {
      lightBrown: '#f5e0c3',
      caramel: '#d2b48c',
      mocha: '#a9746e',
      chocolate: '#7b3f00',
      darkBrown: '#4b2e2e',
      cream: '#f5f5dc',
      accentRed: '#b22222',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', 'Roboto', 'sans-serif'`,
  },
});

export default theme;

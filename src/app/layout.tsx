// src/app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

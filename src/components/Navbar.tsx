// src/components/Navbar.tsx
'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#deb887', // burlywood
        boxShadow: 1,
      }}
    >
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            DevVerse
          </Typography>

          {/* Nav Items */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path} passHref>
                <Button
                  sx={{
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'red',
                      backgroundColor: 'transparent', // no bg on hover
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

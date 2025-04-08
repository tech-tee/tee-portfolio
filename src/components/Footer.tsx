// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ textAlign: 'center', padding: 2, backgroundColor: 'lightgray' }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 DevVerse. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;  // Ensure you're using `default export` here

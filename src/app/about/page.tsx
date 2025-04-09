// src/app/about/page.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#f4f4f9' }}>
      <Typography variant="h3" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        Hi! I&apos;m a passionate developer with a love for coding and problem-solving. I have experience in building web applications using technologies like Next.js, TypeScript, and MUI. I&apos;m always excited to learn new things and take on challenging projects.
      </Typography>
      <Typography variant="body1" paragraph>
        My journey in tech started in my early days, and I&apos;ve since built a strong foundation in computer science. I enjoy collaborating with teams and bringing ideas to life.
      </Typography>
    </Box>
  );
};

export default About;

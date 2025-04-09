'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const Home = () => {
  const theme = useTheme();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 1, height: '100vh' }}
        animate={{
          opacity: 1 - scrollY / 500, // Fades out as you scroll
          height: `calc(100vh - ${scrollY / 2}px)`, // Shrinks the height
          backgroundSize: `${100 + scrollY / 10}%`, // Zoom effect on background
        }}
        transition={{ duration: 0.5 }}
        sx={{
          backgroundImage: `url('/images/12012.jpg')`, // Background image instead of img tag
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0% 100%)',
          paddingY: 8,
          color: theme.palette.text.primary,
          textAlign: 'center',
          height: '100vh', // Make the hero section full height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)', // Slight dark overlay for better text visibility
          }}
        />
        <Container
          sx={{
            position: 'relative',
            color: 'white',
            fontWeight: 'bold',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'flex-end', // Push text to the right
            marginTop: '-170px', // Move upward
            marginRight: '10px', // Move further to the right
          }}
        >
          <Box sx={{ textAlign: 'left', maxWidth: '600px' }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Hi, I&apos;m a Developer!
            </Typography>
            <Typography variant="h5" paragraph>
              I create web applications that are fast, responsive,<br /> and user-friendly. Welcome to my portfolio!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
              component={Link}
              href="/projects"
            >
              Check Out My Projects
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        sx={{
          padding: '60px 20px',
          backgroundColor: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" maxWidth="700px" margin="0 auto">
          I&apos;m a web developer with a passion for creating beautiful and functional websites. 
          I love working with modern web technologies and constantly strive to learn and improve my skills.
        </Typography>
      </Box>
            <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        sx={{
          padding: '60px 20px',
          textAlign: 'center',
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.custom.darkBrown,
        }}
      >
        <Typography variant="h4" gutterBottom>
          My Skills
        </Typography>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Show 3 slides at a time
          loop={true} // Enable infinite loop
          autoplay={{ delay: 2000 }} // Auto scroll every 2 seconds
          breakpoints={{
            320: {
              slidesPerView: 1, // 1 slide for small screens
            },
            768: {
              slidesPerView: 2, // 2 slides for medium screens
            },
            1024: {
              slidesPerView: 3, // 3 slides for larger screens
            },
          }}
          style={{ width: '100%' }}
        >
          {/* JavaScript */}
          <SwiperSlide>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '15px',
                backgroundColor: 'white',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                JavaScript
              </Typography>
            </Box>
          </SwiperSlide>

          {/* TypeScript */}
          <SwiperSlide>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '15px',
                backgroundColor: 'white',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                TypeScript
              </Typography>
            </Box>
          </SwiperSlide>

          {/* React.js */}
          <SwiperSlide>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '15px',
                backgroundColor: 'white',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                React.js
              </Typography>
            </Box>
          </SwiperSlide>

          {/* Next.js */}
          <SwiperSlide>
            <Box
              sx={{
                padding: '20px',
                borderRadius: '15px',
                backgroundColor: 'transparent',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Next.js
              </Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        sx={{
          padding: '60px 20px',
          backgroundColor: theme.palette.custom.lightBrown,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="body1" maxWidth="700px" margin="0 auto">
          Take a look at some of the projects I have worked on. From small personal projects to large-scale applications,
          each project reflects my dedication to creating user-centered solutions.
        </Typography>
      </Box>
      
      {/* Contact Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        sx={{
          padding: '60px 20px',
          backgroundColor: theme.palette.custom.lightBrown,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="body1" maxWidth="700px" margin="0 auto">
          Have any questions or want to get in touch? Feel free to reach out to me. I&apos;d love to hear from you!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          component={Link}
          href="/contact"
        >
          Get In Touch
        </Button>
      </Box>
    </div>
  );
};

export default Home;

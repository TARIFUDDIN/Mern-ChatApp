import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bgcolor: '#f0f4f8',
        textAlign: 'center',
      }}
    >
      <Typography
        component={motion.h1}
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        variant="h1"
        sx={{ fontSize: '4rem', color: '#333', mb: 3 }}
      >
        404
      </Typography>
      <Typography
        component={motion.p}
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        variant="h6"
        sx={{ color: '#666', mb: 3 }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Button
        component={motion.button}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        variant="contained"
        color="primary"
        sx={{
          bgcolor: '#6200ea',
          '&:hover': { bgcolor: '#3700b3' },
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NotFound;

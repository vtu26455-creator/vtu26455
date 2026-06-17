import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = ({ message = 'Loading notifications...' }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 6, gap: 2 }}>
    <CircularProgress />
    <Typography>{message}</Typography>
  </Box>
);

export default LoadingSpinner;

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ErrorDisplay = ({ message, onRetry }) => (
  <Box sx={{ py: 6, textAlign: 'center' }}>
    <Typography variant="h6" color="error" gutterBottom>
      {message}
    </Typography>
    {onRetry && (
      <Button variant="contained" onClick={onRetry}>
        Retry
      </Button>
    )}
  </Box>
);

export default ErrorDisplay;

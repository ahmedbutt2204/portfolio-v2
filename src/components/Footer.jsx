import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ position: 'fixed', bottom: 0, width: '100%', bgcolor: 'primary.main', color: 'white', textAlign: 'center', p: 1 }}>
      <Typography variant="body2">© 2025 Your Name. All Rights Reserved.</Typography>
    </Box>
  );
}

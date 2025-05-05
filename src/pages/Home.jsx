import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { usePageTitle } from '../context/PageTitleContext';

export default function Home() {
  const { setTitle } = usePageTitle();
  useEffect(() => setTitle('Home'), [setTitle]);

  return (
    <Box>
      <img src="/assets/profile.jpg" alt="Profile" style={{ borderRadius: '50%', width: 150 }} />
      <Typography variant="h4">Your Name</Typography>
      <Typography variant="body1">Frontend Developer | React Enthusiast</Typography>
    </Box>
  );
}

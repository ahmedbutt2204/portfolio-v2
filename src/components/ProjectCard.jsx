import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './ProjectCard.css';

export default function ProjectCard({ title, description }) {
  return (
    <Card className="project-card" elevation={3}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
}

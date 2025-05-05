import React from 'react';
import { Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

export default function SideNav() {
  const isMobile = useMediaQuery('(max-width:600px)');
  if (isMobile) return null;

  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        {['Home', 'Education', 'Projects', 'Contact'].map((text) => (
          <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

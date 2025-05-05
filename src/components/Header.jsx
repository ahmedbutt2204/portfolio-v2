import React from 'react';
import { AppBar, Toolbar, Avatar, IconButton, Menu, MenuItem } from '@mui/material';

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position="static">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>My Portfolio</div>
        <IconButton onClick={handleClick}>
          <Avatar src="/assets/profile.jpg" />
        </IconButton>
        <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Logout (Placeholder)</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: 'white',
        padding: '2rem',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          Njabulo
        </Typography>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: '8px',
              mb: 1,
              background: isActive(item.path) ? 'rgba(96, 165, 250, 0.1)' : 'transparent',
              '&:hover': {
                background: 'rgba(96, 165, 250, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                color: isActive(item.path) ? '#60a5fa' : 'white',
                '& .MuiTypography-root': {
                  fontWeight: isActive(item.path) ? 600 : 400,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isScrolled
          ? 'rgba(15, 23, 42, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease-in-out',
        py: isScrolled ? 1 : 2,
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            Njabulo
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Box
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? '#60a5fa' : 'white',
                    textDecoration: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: '8px',
                    transition: 'all 0.2s ease-in-out',
                    position: 'relative',
                    fontWeight: isActive(item.path) ? 600 : 400,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: isActive(item.path)
                        ? 'translateX(-50%) scaleX(1)'
                        : 'translateX(-50%) scaleX(0)',
                      width: '80%',
                      height: '2px',
                      background: '#60a5fa',
                      transition: 'transform 0.2s ease-in-out',
                    },
                    '&:hover': {
                      background: 'rgba(96, 165, 250, 0.1)',
                      '&::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    },
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;

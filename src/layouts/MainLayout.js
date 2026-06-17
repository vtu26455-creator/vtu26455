import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';
import { logger } from '../services/logger';

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'All Notifications', path: '/notifications' },
  { label: 'Priority Inbox', path: '/priority' }
];

const MainLayout = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    logger.logNavigation('route-change', location.pathname);
  }, [location.pathname]);

  return (
    <Box>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="img"
                src="/logo.svg"
                alt="AffordMed Logo"
                sx={{ width: 44, height: 44 }}
              />
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{ textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.3px' }}
              >
                AffordMed
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '14px',
                    px: 1.5,
                    py: 0.75,
                    borderRadius: '6px',
                    transition: 'all 0.2s ease',
                    backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
                    '&:hover': {
                      backgroundColor: location.pathname === item.path ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.15)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;

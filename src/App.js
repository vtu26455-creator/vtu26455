import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Paper } from '@mui/material';
import AppRoutes from './routes/AppRoutes';
import MainLayout from './layouts/MainLayout';
import { logger } from './services/logger';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#2f7bff', contrastText: '#ffffff' },
    secondary: { main: '#00a86b', contrastText: '#ffffff' },
    background: {
      default: '#071027',
      paper: '#0b1320'
    },
    text: {
      primary: '#e6eef8',
      secondary: '#b9c6d4'
    },
    divider: '#1f2b36',
    success: { main: '#00a86b' },
    warning: { main: '#e8821f' },
    error: { main: '#d64545' }
  },
  typography: {
    fontFamily: '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: { fontWeight: 800, fontSize: '42px', letterSpacing: '-1px', lineHeight: 1.2 },
    h4: { fontWeight: 700, fontSize: '28px', letterSpacing: '-0.5px', lineHeight: 1.3 },
    h6: { fontWeight: 600, fontSize: '14px', letterSpacing: '0.3px' },
    subtitle2: { fontWeight: 600, fontSize: '12px', letterSpacing: '0.4px' },
    body1: { fontWeight: 400, fontSize: '15px', lineHeight: 1.5 },
    body2: { fontWeight: 400, fontSize: '14px', lineHeight: 1.5 }
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 8px 20px rgba(2, 6, 23, 0.6)',
          border: '1px solid rgba(255,255,255,0.03)',
          backgroundColor: '#0f1824',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 28px rgba(2, 6, 23, 0.7)',
            transform: 'translateY(-2px)'
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(2, 6, 23, 0.8)',
          background: 'linear-gradient(135deg, #021b3a 0%, #073a83 100%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(6px)',
          position: 'sticky'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: '0 6px 12px rgba(2, 6, 23, 0.6)',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 10px 24px rgba(2, 6, 23, 0.7)',
            transform: 'translateY(-1px)'
          }
        },
        outlined: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          transition: 'all 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(47, 123, 255, 0.06)'
          }
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: '12px',
          borderRadius: 6,
          transition: 'all 0.2s ease'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            transition: 'all 0.2s ease',
            '&:hover fieldset': {
              borderColor: '#2f7bff'
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    }
  }
});

class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logger.logError('Component Error', { error: error.toString(), info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Paper sx={{ p: 4 }}>
            <Box>
              <h1>Something went wrong.</h1>
              <p>We are working to restore your experience.</p>
            </Box>
          </Paper>
        </Container>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ComponentErrorBoundary>
        <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Box>
      </ComponentErrorBoundary>
    </ThemeProvider>
  );
}

export default App;

import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#4F46E5', // Modern indigo
      },
      secondary: {
        main: '#10B981', // Fresh green
      },
      background: {
        default: darkMode ? '#0F172A' : '#F8FAFC', // Slate dark/light
        paper: darkMode ? '#1E293B' : '#FFFFFF',
      },
      text: {
        primary: darkMode ? '#F1F5F9' : '#1E293B',
        secondary: darkMode ? '#CBD5E1' : '#475569',
      },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 800,
        letterSpacing: '-0.025em',
      },
      h2: {
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h3: {
        fontWeight: 700,
      },
      body1: {
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.95rem',
            padding: '8px 24px',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
            backgroundImage: 'none',
          },
        },
      },
    },
    shape: {
      borderRadius: 12,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          minHeight: '100vh',
          background: darkMode 
            ? 'linear-gradient(to bottom right, #0F172A, #1E293B)'
            : 'linear-gradient(to bottom right, #F8FAFC, #F1F5F9)',
        }}
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Projects />
      </Box>
    </ThemeProvider>
  )
}

export default App

import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useScrollTrigger,
  Slide,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from '@mui/material'
import { Brightness4, Brightness7, Menu, Close } from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()

  const menuItems = ['About', 'Skills', 'Projects', 'Contact']

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.default + '80',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4F46E5, #10B981)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                Njabulo.dev
              </Typography>
            </motion.div>

            <Box sx={{ flexGrow: 1 }} />
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>

            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <IconButton
                sx={{ ml: 2 }}
                onClick={() => setDarkMode(!darkMode)}
                color="inherit"
              >
                {darkMode ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </motion.div>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: 'none' } }}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>

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
              width: 240,
              background: theme.palette.background.default,
            },
          }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <Close />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item} onClick={handleDrawerToggle}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: { fontWeight: 500 },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  )
}

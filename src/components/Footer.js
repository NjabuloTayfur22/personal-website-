import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3} alignItems="center">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              '& a': {
                color: '#94a3b8',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: '#60a5fa',
                  transform: 'translateY(-3px)',
                },
              },
            }}
          >
            <IconButton
              component="a"
              href="https://github.com/NjabuloTayfur22/personal-website-"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'inherit' }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'inherit' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:s227868706@mandela.ac.za"
              sx={{ color: 'inherit' }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1.5, sm: 3 }}
            sx={{
              '& a': {
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#60a5fa',
                },
              },
            }}
          >
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </Stack>

          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              background: 'linear-gradient(45deg, #94a3b8, #64748b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {new Date().getFullYear()} Njabulo Nomvete
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

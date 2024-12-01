import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  IconButton,
  Paper,
  Snackbar,
  Alert,
} from '@mui/material';
import { keyframes } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create a mailto link with the form data
      const subject = encodeURIComponent("Portfolio Contact Form");
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message: ${formData.message}`
      );
      
      // Open the default email client with the correct email address
      window.location.href = `mailto:s227868706@mandela.ac.za?subject=${subject}&body=${body}`;
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Opening your email client...',
        severity: 'success',
      });
      
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to open email client. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon sx={{ fontSize: 28 }} />,
      url: 'https://github.com/NjabuloTayfur22/personal-website-',
      color: '#60a5fa',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
      url: 'https://www.linkedin.com/feed/',
      color: '#60a5fa',
    },
    {
      name: 'Email',
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      url: 'mailto:s227868706@mandela.ac.za',
      color: '#60a5fa',
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
        py: 10,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          animation: `${shimmer} 8s linear infinite`,
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #fff 30%, #60a5fa 50%, #db2777 70%, #fff 90%)',
            backgroundSize: '200% auto',
            color: 'transparent',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            animation: `${shimmer} 4s linear infinite`,
            textShadow: '0 0 30px rgba(219, 39, 119, 0.3)',
          }}
        >
          Get In Touch
        </Typography>

        <Grid container spacing={6} alignItems="stretch">
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                animation: `${fadeInUp} 1s ease-out`,
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ color: '#60a5fa', fontWeight: 600, mb: 2 }}>
                  Send Me a Message
                </Typography>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#60a5fa',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                      '&.Mui-focused': {
                        color: '#60a5fa',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#60a5fa',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                      '&.Mui-focused': {
                        color: '#60a5fa',
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#60a5fa',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                      '&.Mui-focused': {
                        color: '#60a5fa',
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 2,
                    py: 1.5,
                    background: 'linear-gradient(90deg, #60a5fa, #db2777)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #3b82f6, #be185d)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                animation: `${fadeInUp} 1s ease-out 0.2s`,
              }}
            >
              <Stack spacing={4}>
                <Box>
                  <Typography variant="h5" sx={{ color: '#60a5fa', fontWeight: 600, mb: 2 }}>
                    Connect With Me
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3 }}>
                    I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and development.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: '#60a5fa', mb: 2 }}>
                    Find Me On
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {socialLinks.map((link) => (
                      <IconButton
                        key={link.name}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'white',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: link.color,
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: '#60a5fa', mb: 2 }}>
                    Response Time
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                    I typically respond within 24-48 hours. For urgent matters, please reach out via LinkedIn or email.
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;

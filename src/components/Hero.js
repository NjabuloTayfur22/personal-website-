import React from 'react';
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material';
import { keyframes } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import profilePic from '../assets/images/1693729858860~2.jpg';

// Enhanced Animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg) scale(1); }
  25% { transform: translateY(-15px) rotate(3deg) scale(1.02); }
  50% { transform: translateY(0px) rotate(0deg) scale(1); }
  75% { transform: translateY(15px) rotate(-3deg) scale(1.02); }
  100% { transform: translateY(0px) rotate(0deg) scale(1); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 25px rgba(96, 165, 250, 0.4); }
  50% { box-shadow: 0 0 40px rgba(219, 39, 119, 0.6); }
  100% { box-shadow: 0 0 25px rgba(96, 165, 250, 0.4); }
`;

const borderRotate = keyframes`
  0% { transform: rotate(0deg); background-position: 0% 50%; }
  100% { transform: rotate(360deg); background-position: 100% 50%; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0); }
  50% { opacity: 1; transform: scale(1); }
`;

function Hero() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(-45deg, #1e293b, #0f172a, #312e81, #1e1b4b)',
        backgroundSize: '400% 400%',
        animation: 'gradientMove 15s ease infinite',
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
          pointerEvents: 'none',
          animation: `${shimmer} 8s linear infinite`,
        },
      }}
    >
      {/* Animated Background Particles */}
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: 'white',
            borderRadius: '50%',
            animation: `${sparkle} ${Math.random() * 3 + 2}s linear infinite`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
        />
      ))}

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative' }}
        >
          {/* Profile Picture with Enhanced Effects */}
          <Box
            sx={{
              display: 'flex',
              animation: `${float} 6s ease-in-out infinite`,
              position: 'relative',
              width: { xs: '260px', sm: '300px', md: '340px' },
              height: { xs: '260px', sm: '300px', md: '340px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                inset: -8,
                padding: 8,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #60a5fa, #db2777, #4f46e5, #60a5fa)',
                backgroundSize: '300% 300%',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                animation: `${borderRotate} 8s linear infinite`,
              },
              '&::after': {
                filter: 'blur(15px)',
                opacity: 0.6,
                transform: 'scale(1.05)',
              },
            }}
          >
            <Avatar
              src={profilePic}
              alt="Njabulo Nomvete"
              sx={{
                width: '100%',
                height: '100%',
                border: '5px solid rgba(255,255,255,0.2)',
                position: 'relative',
                zIndex: 1,
                animation: `${glowPulse} 4s ease-in-out infinite`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                objectFit: 'cover',
                objectPosition: 'center',
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  border: '5px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 0 50px rgba(219, 39, 119, 0.4)',
                  '& + .glow': {
                    opacity: 0.9,
                    transform: 'translate(-50%, -50%) scale(1.2)',
                  },
                },
              }}
            />
            <Box
              className="glow"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'radial-gradient(circle at center, rgba(219, 39, 119, 0.3) 0%, rgba(96, 165, 250, 0.2) 40%, transparent 70%)',
                filter: 'blur(30px)',
                opacity: 0.5,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          </Box>

          {/* Text Content with Student-Appropriate Professional Appeal */}
          <Stack spacing={3} sx={{ maxWidth: '600px', position: 'relative' }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(45deg, #fff 30%, #60a5fa 50%, #db2777 70%, #fff 90%)',
                backgroundSize: '200% auto',
                color: 'transparent',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                animation: `${shimmer} 4s linear infinite`,
                textShadow: '0 0 30px rgba(219, 39, 119, 0.3)',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              Hi, I'm Njabulo Nomvete
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                textShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
                animation: 'fadeIn 1s ease-out',
                mb: 1,
              }}
            >
              First-Year IT Student | Learning & Growing
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: '540px',
                mb: 2,
              }}
            >
              Currently studying Information Technology at Nelson Mandela University. 
              Passionate about learning web development and exploring new technologies. 
              Always excited to take on new challenges and grow my skills.
            </Typography>

            {/* Current Learning Focus */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: '#60a5fa',
                  fontWeight: 600,
                  mb: 1,
                }}
              >
                Currently Learning
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{
                  gap: 1,
                  '& > *': {
                    margin: '4px',
                  }
                }}
              >
                {[
                  'HTML & CSS',
                  'JavaScript',
                  'React Basics',
                  'Web Design',
                  'Programming Logic',
                  'Problem Solving'
                ].map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      fontSize: '0.9rem',
                      color: 'white',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(96, 165, 250, 0.2)',
                        transform: 'translateY(-2px)',
                        border: '1px solid rgba(96, 165, 250, 0.4)',
                      }
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Student Projects & Contact */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Button
                variant="contained"
                href="https://github.com/NjabuloTayfur22/personal-website-"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#60a5fa',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#3b82f6',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)',
                  }
                }}
              >
                My Learning Projects
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  const mailtoLink = 'mailto:s227868706@mandela.ac.za?subject=Connection%20Request&body=Hi%20Njabulo%2C%0A%0AI%20found%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you.';
                  const linkedinLink = 'https://www.linkedin.com/feed/';
                  window.open(mailtoLink);
                  setTimeout(() => window.open(linkedinLink, '_blank'), 100);
                }}
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transform: 'translateY(-2px)',
                  }
                }}
              >
                Connect With Me
              </Button>
            </Stack>

            {/* Student Profile Links */}
            <Stack
              direction="row"
              spacing={3}
              sx={{
                '& a': {
                  color: 'white',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  '&:hover': {
                    color: '#60a5fa',
                    transform: 'translateY(-2px)',
                    opacity: 1,
                    '& .MuiSvgIcon-root': {
                      filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))',
                    },
                  },
                },
              }}
            >
              <a href="https://github.com/NjabuloTayfur22/personal-website-" target="_blank" rel="noopener noreferrer">
                <GitHubIcon sx={{ fontSize: 24 }} />
                <span>Student Projects</span>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: 24 }} />
                <span>Student Profile</span>
              </a>
              <a href="https://outlook.office.com/mail/?actSwt=true&username=s227868706@mandela.ac.za" target="_blank" rel="noopener noreferrer">
                <EmailIcon sx={{ fontSize: 24 }} />
                <span>University Email</span>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;

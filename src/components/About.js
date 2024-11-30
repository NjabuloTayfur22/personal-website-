import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PsychologyIcon from '@mui/icons-material/Psychology';

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

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const About = () => {
  const learningProgress = [
    { skill: 'HTML & CSS', progress: 75 },
    { skill: 'JavaScript', progress: 60 },
    { skill: 'React.js', progress: 50 },
    { skill: 'UI/UX Design', progress: 65 },
  ];

  const interests = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Web Development',
      description: 'Learning to build modern, responsive websites using React and other cutting-edge technologies.'
    },
    {
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      title: 'UI/UX Design',
      description: 'Exploring the principles of user interface design and creating engaging user experiences.'
    },
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Problem Solving',
      description: 'Developing logical thinking and creative solutions to technical challenges.'
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and improve my development skills.'
    }
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
        {/* Section Title */}
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
          About Me
        </Typography>

        <Grid container spacing={6}>
          {/* Personal Introduction */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                animation: `${fadeInUp} 1s ease-out`,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#60a5fa',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                My Journey
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.8,
                  mb: 2,
                }}
              >
                I'm a first-year Information Technology student at Nelson Mandela University, passionate about web development and technology. My journey in tech began with curiosity and has evolved into a dedicated pursuit of knowledge in software development.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.8,
                }}
              >
                Currently focusing on front-end development, I'm building a strong foundation in HTML, CSS, and JavaScript while exploring modern frameworks like React. I believe in learning by doing and am constantly working on projects to improve my skills.
              </Typography>
            </Paper>
          </Grid>

          {/* Learning Progress */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.1)',
                animation: `${fadeInUp} 1s ease-out`,
                height: '100%',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#60a5fa',
                  fontWeight: 600,
                  mb: 3,
                }}
              >
                Learning Progress
              </Typography>
              <Stack spacing={3}>
                {learningProgress.map((item, index) => (
                  <Box key={item.skill}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255,255,255,0.9)' }}
                      >
                        {item.skill}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255,255,255,0.7)' }}
                      >
                        {item.progress}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={item.progress}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(90deg, #60a5fa, #db2777)',
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Grid>

          {/* Interests Grid */}
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {interests.map((interest, index) => (
                <Grid item xs={12} sm={6} md={3} key={interest.title}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 4,
                      border: '1px solid rgba(255,255,255,0.1)',
                      animation: `${fadeInUp} 1s ease-out`,
                      animationDelay: `${index * 0.2}s`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        background: 'rgba(255,255,255,0.08)',
                        '& .icon': {
                          animation: `${float} 2s ease-in-out infinite`,
                          color: '#60a5fa',
                        },
                      },
                    }}
                  >
                    <Box
                      className="icon"
                      sx={{
                        color: 'white',
                        mb: 2,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {interest.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white',
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {interest.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        lineHeight: 1.6,
                      }}
                    >
                      {interest.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern portfolio website built with React and Material-UI to showcase my projects and skills.',
      image: 'https://via.placeholder.com/800x400/1e1b4b/ffffff?text=Portfolio+Website',
      technologies: ['React', 'Material-UI', 'CSS Animations'],
      link: 'https://github.com/NjabuloTayfur22/personal-website-'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather conditions and forecasts.',
      image: 'https://via.placeholder.com/800x400/312e81/ffffff?text=Weather+Dashboard',
      technologies: ['JavaScript', 'Weather API', 'HTML/CSS'],
      link: 'https://github.com/NjabuloTayfur22/personal-website-'
    },
    {
      title: 'Task Manager',
      description: 'A simple task management application to help organize daily activities and track progress.',
      image: 'https://via.placeholder.com/800x400/1e1b4b/ffffff?text=Task+Manager',
      technologies: ['React', 'LocalStorage', 'CSS'],
      link: 'https://github.com/NjabuloTayfur22/personal-website-'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)',
        py: 10,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            color: '#fff'
          }}
        >
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} key={project.title}>
              <Card
                onClick={() => window.open(project.link, '_blank')}
                sx={{
                  height: '100%',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    background: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                />
                <CardContent>
                  <Stack spacing={2}>
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(96, 165, 250, 0.2)',
                            color: '#60a5fa',
                          }}
                        />
                      ))}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

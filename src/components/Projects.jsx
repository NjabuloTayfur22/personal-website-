import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CodeIcon from '@mui/icons-material/Code';

const projects = [
  {
    title: "Student Task Manager",
    description: "A C# Windows Forms application that helps students organize their assignments, deadlines, and study schedules. Features a SQLite database for data persistence.",
    image: "/images/task-manager.jpg",
    tags: ["C#", "Windows Forms", "SQLite", "CRUD Operations"],
    github: "https://github.com/njabulomlang/student-task-manager",
    demo: "https://github.com/njabulomlang/student-task-manager#readme",
    type: "Desktop Application",
    status: "In Progress",
    learning: "This project helped me understand C# fundamentals, database operations, and building user interfaces with Windows Forms."
  },
  {
    title: "Weather Data Analyzer",
    description: "A Python application that fetches real-time weather data, processes it using Pandas, and creates beautiful visualizations. Features temperature trends, precipitation patterns, and forecast predictions.",
    image: "/images/weather-analysis.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "APIs"],
    github: "https://github.com/njabulomlang/weather-analyzer",
    demo: "https://github.com/njabulomlang/weather-analyzer#readme",
    type: "Data Science",
    status: "Completed",
    learning: "Enhanced my Python skills with data analysis, API integration, and data visualization libraries."
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio website built with React and Material-UI. Features responsive design, smooth animations with Framer Motion, and showcases my journey as a developer.",
    image: "/images/portfolio.jpg",
    tags: ["React", "Material-UI", "Framer Motion"],
    github: "https://github.com/njabulomlang/personal-website",
    demo: "https://njabulomlang.github.io/personal-website",
    type: "Web Development",
    status: "Active",
    learning: "Mastered React components, Material-UI theming, and animation principles with Framer Motion."
  },
  {
    title: "Library Management System",
    description: "A C# console application for managing library operations including book tracking, member management, and borrowing system. Demonstrates OOP principles and file handling.",
    image: "/images/library-system.jpg",
    tags: ["C#", "OOP", "File I/O", "Console UI"],
    github: "https://github.com/njabulomlang/library-system",
    demo: "https://github.com/njabulomlang/library-system#readme",
    type: "Console Application",
    status: "Completed",
    learning: "Strengthened my understanding of object-oriented programming, file operations, and system design."
  },
  {
    title: "Student Grade Calculator",
    description: "A Python GUI application using Tkinter for calculating and analyzing student grades. Features grade tracking, GPA calculation, and visual grade distribution.",
    image: "/images/grade-calc.jpg",
    tags: ["Python", "Tkinter", "GUI", "Data Analysis"],
    github: "https://github.com/njabulomlang/grade-calculator",
    demo: "https://github.com/njabulomlang/grade-calculator#readme",
    type: "Desktop Application",
    status: "Completed",
    learning: "Developed skills in GUI programming, event handling, and creating user-friendly interfaces."
  },
  {
    title: "Restaurant Website",
    description: "A responsive restaurant website built with HTML, CSS, and JavaScript. Features an online menu, reservation system, and contact form.",
    image: "/images/restaurant-site.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/njabulomlang/restaurant-website",
    demo: "https://njabulomlang.github.io/restaurant-website",
    type: "Web Development",
    status: "In Progress",
    learning: "Improved my frontend development skills, responsive design techniques, and form handling."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        component={motion.div}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        sx={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          right: '-10%',
          top: '10%',
          background: 'linear-gradient(135deg, rgba(255, 60, 172, 0.2) 0%, rgba(43, 134, 197, 0.2) 100%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              background: 'linear-gradient(45deg, #FF3CAC, #784BA0, #2B86C5)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            My Projects
          </Typography>
          
          <Typography
            variant="h6"
            component="p"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            Showcasing my journey in software development through hands-on projects.
            Each project represents key learning milestones in C#, Python, and web development.
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.3)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          objectFit: 'cover',
                          borderRadius: '20px 20px 0 0',
                        }}
                      />
                      <Chip
                        label={project.status}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          background: project.status === 'Completed' 
                            ? 'linear-gradient(45deg, #00C853, #64DD17)'
                            : project.status === 'In Progress'
                              ? 'linear-gradient(45deg, #FF3CAC, #784BA0)'
                              : 'linear-gradient(45deg, #2B86C5, #784BA0)',
                          color: '#fff',
                          fontWeight: 500,
                        }}
                        size="small"
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 600,
                          color: '#fff',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="rgba(255, 255, 255, 0.7)"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 2,
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontStyle: 'italic',
                          fontSize: '0.85rem',
                        }}
                      >
                        {project.learning}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.tags.map((tag, tagIndex) => (
                          <Chip
                            key={tagIndex}
                            label={tag}
                            sx={{
                              background: 'linear-gradient(45deg, #FF3CAC 30%, #2B86C5 90%)',
                              color: '#fff',
                              fontWeight: 500,
                            }}
                            size="small"
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                      <Box>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: '#fff',
                            '&:hover': {
                              color: '#FF3CAC',
                            },
                          }}
                        >
                          Code
                        </Button>
                        {project.demo && (
                          <Button
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: '#fff',
                              '&:hover': {
                                color: '#2B86C5',
                              },
                            }}
                          >
                            Live Demo
                          </Button>
                        )}
                      </Box>
                      <Chip
                        icon={<CodeIcon />}
                        label={project.type}
                        sx={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#fff',
                        }}
                        size="small"
                      />
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;

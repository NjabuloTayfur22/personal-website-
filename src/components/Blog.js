import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { keyframes } from '@mui/system';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CloseIcon from '@mui/icons-material/Close';

const fadeIn = keyframes`
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
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const posts = [
    {
      title: 'My Journey into IT at Nelson Mandela University',
      date: 'October 2023',
      readTime: '5 min read',
      description: 'Reflecting on my first year studying Information Technology at Nelson Mandela University. From challenging coursework to exciting projects, here\'s my story.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['University Life', 'IT Studies', 'Personal Growth'],
      content: {
        sections: [
          {
            title: 'The Beginning',
            text: 'When I first stepped onto the Nelson Mandela University campus, I was filled with a mix of excitement and nervousness. The world of Information Technology had always fascinated me, but now I was about to dive deep into its complexities and possibilities.'
          },
          {
            title: 'First Semester Highlights',
            text: 'My introduction to programming was both challenging and rewarding. I learned about variables, data types, control structures, and object-oriented programming. The most exciting part was seeing my first programs come to life, even if they were simple console applications.'
          },
          {
            title: 'Web Development Journey',
            text: 'Learning HTML, CSS, and JavaScript opened my eyes to the creative side of IT. Building my first web pages gave me a sense of accomplishment and sparked my interest in web development, leading to this portfolio website.'
          },
          {
            title: 'Looking Forward',
            text: 'As I continue my studies, I\'m excited about exploring advanced programming concepts, participating in team projects, learning about AI and machine learning, and contributing to open-source projects.'
          }
        ]
      }
    },
    {
      title: 'Building My First React Portfolio Website',
      date: 'September 2023',
      readTime: '4 min read',
      description: 'A deep dive into my experience learning React and Material-UI while building this portfolio website. Learn about the challenges I faced and solutions I discovered.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      tags: ['React', 'Web Development', 'Portfolio'],
      content: {
        sections: [
          {
            title: 'Why React?',
            text: 'After researching various frameworks, I chose React for its component-based architecture, large community, excellent documentation, and integration with Material-UI.'
          },
          {
            title: 'Development Process',
            text: 'The journey started with careful planning - sketching wireframes, choosing a color scheme, and planning the component structure. This foundation was crucial for the successful development of the site.'
          },
          {
            title: 'Key Features',
            text: 'Implementing responsive design with Material-UI\'s Grid system was a game-changer. Adding smooth animations and transitions brought the site to life and improved the user experience significantly.'
          },
          {
            title: 'Lessons Learned',
            text: 'This project taught me the importance of planning, the power of component reusability, and how to create engaging user interfaces. It\'s been an invaluable learning experience that continues to shape my development journey.'
          }
        ]
      }
    },
    {
      title: 'The Impact of AI in Modern Software Development',
      date: 'August 2023',
      readTime: '6 min read',
      description: 'Exploring how artificial intelligence is transforming the software development landscape and what it means for aspiring developers.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80',
      tags: ['AI', 'Technology', 'Future'],
      content: {
        sections: [
          {
            title: 'The AI Revolution',
            text: 'AI is revolutionizing software development with tools like GitHub Copilot, Amazon CodeWhisperer, and Tabnine. These tools are changing how we write and review code.'
          },
          {
            title: 'Benefits for Developers',
            text: 'AI tools increase productivity through faster code writing, automated tasks, and enhanced debugging. They also help maintain consistent coding standards and improve code quality.'
          },
          {
            title: 'Learning with AI',
            text: 'As a student, I\'ve found AI tools invaluable for learning new concepts, understanding best practices, and exploring alternative solutions to programming problems.'
          },
          {
            title: 'Future Outlook',
            text: 'AI isn\'t replacing developers but augmenting their capabilities. The future of software development looks incredibly promising with AI as our collaborative partner.'
          }
        ]
      }
    }
  ];

  const handleOpenPost = (post) => {
    setSelectedPost(post);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
  };

  return (
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #60a5fa, #db2777)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 800,
              mb: 3,
              animation: `${fadeIn} 1s ease-out`,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Latest Blog Posts
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#94a3b8',
              maxWidth: 800,
              mx: 'auto',
              animation: `${fadeIn} 1s ease-out 0.2s`,
              animationFillMode: 'both',
            }}
          >
            Sharing my journey, insights, and experiences in technology
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {posts.map((post, index) => (
            <Grid 
              item 
              key={index} 
              xs={12} 
              md={4}
              sx={{
                animation: `${fadeIn} 1s ease-out ${0.2 + index * 0.1}s`,
                animationFillMode: 'both',
              }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    '& .card-media': {
                      transform: 'scale(1.1)',
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    className="card-media"
                    component="img"
                    height="240"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      p: 2,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AccessTimeIcon sx={{ color: 'white', fontSize: '0.875rem' }} />
                      <Typography variant="caption" sx={{ color: 'white' }}>
                        {post.readTime}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ 
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      color: '#94a3b8',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                    }}
                  >
                    {post.date}
                  </Typography>
                  <Typography sx={{ color: '#94a3b8', mb: 2 }}>
                    {post.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2 }}>
                    {post.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(96, 165, 250, 0.2)',
                          color: '#60a5fa',
                          '&:hover': {
                            backgroundColor: 'rgba(96, 165, 250, 0.3)',
                          },
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    onClick={() => handleOpenPost(post)}
                    sx={{
                      bgcolor: '#60a5fa',
                      color: 'white',
                      '&:hover': {
                        bgcolor: '#3b82f6',
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Blog Post Dialog */}
        <Dialog
          fullScreen={fullScreen}
          maxWidth="md"
          open={Boolean(selectedPost)}
          onClose={handleClosePost}
          scroll="paper"
          sx={{
            '& .MuiDialog-paper': {
              background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
              color: 'white',
            },
          }}
        >
          {selectedPost && (
            <>
              <DialogTitle sx={{ m: 0, p: 2, color: 'white' }}>
                <IconButton
                  aria-label="close"
                  onClick={handleClosePost}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: 'white',
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ p: 4 }}>
                <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '24px',
                    }}
                  />
                  <Typography variant="h3" sx={{ color: 'white', mb: 3, fontWeight: 700 }}>
                    {selectedPost.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: '#94a3b8', mb: 4 }}>
                    {selectedPost.date} · {selectedPost.readTime}
                  </Typography>
                  
                  {selectedPost.content.sections.map((section, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                      <Typography variant="h5" sx={{ color: '#60a5fa', mb: 2, fontWeight: 600 }}>
                        {section.title}
                      </Typography>
                      <Typography sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                        {section.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}

export default Blog;

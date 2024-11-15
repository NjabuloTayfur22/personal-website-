import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material'
import { motion } from 'framer-motion'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const profileAnimation = {
  hidden: { scale: 0.5, opacity: 0 },
  show: { 
    scale: 1, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.2
    }
  }
}

export default function Hero() {
  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'transparent',
      }}
    >
      <Container 
        maxWidth={false}
        sx={{
          height: '100vh',
          maxWidth: '1600px',
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          position: 'relative',
        }}
      >
        {/* Floating Elements */}
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
            width: '300px',
            height: '300px',
            right: '5%',
            top: '10%',
            background: 'linear-gradient(135deg, rgba(255, 60, 172, 0.2) 0%, rgba(43, 134, 197, 0.2) 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 10s infinite',
            zIndex: 0,
          }}
        />
        <Box
          component={motion.div}
          animate={{
            y: [20, -20, 20],
            rotate: [360, 0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          sx={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            left: '0%',
            bottom: '10%',
            background: 'linear-gradient(135deg, rgba(120, 75, 160, 0.2) 0%, rgba(255, 60, 172, 0.2) 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 15s infinite',
            zIndex: 0,
          }}
        />

        <Box
          component={motion.div}
          variants={container}
          initial="hidden"
          animate="show"
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            gap: { xs: 4, md: 8 },
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            py: { xs: 8, md: 0 },
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: '-20px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
              zIndex: -1,
            }
          }}
        >
          {/* Background gradient circles */}
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            sx={{
              position: 'absolute',
              width: '70vw',
              height: '70vw',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(79,70,229,0) 70%)',
              filter: 'blur(40px)',
              top: '-20%',
              right: '-10%',
              zIndex: 0,
            }}
          />
          <Box
            component={motion.div}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            sx={{
              position: 'absolute',
              width: '65vw',
              height: '65vw',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(16,185,129,0.05) 0%, rgba(16,185,129,0) 70%)',
              filter: 'blur(40px)',
              bottom: '-10%',
              left: '-5%',
              zIndex: 0,
            }}
          />

          {/* Profile Picture Section with glass effect */}
          <Box
            component={motion.div}
            variants={profileAnimation}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            sx={{
              position: 'relative',
              order: { xs: 1, md: 2 },
              minWidth: { xs: '300px', sm: '340px', md: '400px' },
              cursor: 'pointer',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: '-20px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                zIndex: -1,
              }
            }}
          >
            {/* Outer glow and rotating border */}
            <Box
              sx={{
                width: { xs: '300px', sm: '340px', md: '400px' },
                height: { xs: '300px', sm: '340px', md: '400px' },
                position: 'relative',
                filter: 'drop-shadow(0 0 20px rgba(255, 60, 172, 0.3))',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '-15px',
                  padding: '15px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-animation 8s linear infinite, spin 8s linear infinite',
                  WebkitMask: 
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                },
                '@keyframes gradient-animation': {
                  '0%': {
                    backgroundPosition: '0% 0%',
                  },
                  '100%': {
                    backgroundPosition: '200% 200%',
                  },
                },
                '@keyframes spin': {
                  '0%': {
                    transform: 'rotate(0deg)',
                  },
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            >
              {/* Inner border and image */}
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  borderRadius: '50%',
                  padding: '8px',
                  background: theme => theme.palette.background.paper,
                }}
              >
                <Avatar
                  src="/images/1693729858860~2.jpg"
                  alt="Njabulo Nomvete"
                  sx={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid',
                    borderColor: 'background.paper',
                    borderRadius: '50%',
                    boxShadow: theme => `0 0 30px ${theme.palette.primary.main}40`,
                    '& img': {
                      objectFit: 'cover',
                      borderRadius: '50%',
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Content Section */}
          <Stack 
            spacing={4} 
            maxWidth="800px"
            zIndex={1}
            order={{ xs: 2, md: 1 }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              px: { xs: 2, sm: 4 },
            }}
          >
            <Box component={motion.div} variants={item}>
              <Typography
                variant="h6"
                fontWeight={600}
                gutterBottom
                sx={{ 
                  mb: 1,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: '1.2rem', md: '1.4rem' },
                  background: 'linear-gradient(45deg, #4F46E5, #10B981)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '0.02em',
                }}
              >
                Hello, I'm
              </Typography>
            </Box>

            <Box component={motion.div} variants={item}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: { xs: '3.2rem', sm: '3.8rem', md: '4.8rem' },
                  lineHeight: 1.1,
                  mb: 2,
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(to right, #fff, rgba(255,255,255,0.8))',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Njabulo Nomvete
              </Typography>
            </Box>

            <Box component={motion.div} variants={item}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 3,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #4F46E5, #10B981)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  letterSpacing: '0.02em',
                }}
              >
                Information Technology Student
              </Typography>
            </Box>

            <Box component={motion.div} variants={item}>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 4, 
                  maxWidth: { xs: '100%', md: '600px' },
                  fontSize: { xs: '1.1rem', md: '1.2rem' },
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                }}
              >
                Passionate about creating innovative solutions through technology.
                Currently pursuing my Bachelor's degree in Information Technology,
                focusing on building modern and impactful applications.
              </Typography>
            </Box>

            <Stack
              component={motion.div}
              variants={item}
              direction="row"
              spacing={2}
              sx={{ 
                mb: 4,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: 'linear-gradient(45deg, #FF3CAC 30%, #2B86C5 90%)',
                  boxShadow: '0 3px 15px rgba(255, 60, 172, 0.3)',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  padding: '0.8rem 2rem',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 5px 20px rgba(255, 60, 172, 0.4)',
                    background: 'linear-gradient(45deg, #784BA0 30%, #2B86C5 90%)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderWidth: '2px',
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  padding: '0.8rem 2rem',
                  '&:hover': {
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Me
              </Button>
            </Stack>

            <Stack
              component={motion.div}
              variants={item}
              direction="row"
              spacing={3}
              sx={{ 
                mt: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                style={{ color: 'inherit' }}
              >
                <GitHub fontSize="large" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                style={{ color: 'inherit' }}
              >
                <LinkedIn fontSize="large" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ y: -5, scale: 1.1 }}
                style={{ color: 'inherit' }}
              >
                <Email fontSize="large" />
              </motion.a>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}

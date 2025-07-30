import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Box, Container,
  Grid, Chip, Link, Card, CardContent, CardActions, IconButton, Avatar, Divider
} from '@mui/material';
import {
  Code, Info, Work, ContactMail, Terminal, Email, GitHub, LinkedIn, School, EmojiObjects
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const skills = [
  'React.js', 'Material-UI', 'JavaScript', 'TypeScript', 'Node.js',
  'Spring Boot', 'REST API', 'GitHub', 'Agile', 'MongoDB', 'SQL', 'Figma', 'HTML5', 'CSS3', 'Tailwind CSS'
];

const projects = [
  {
    title: 'AI Chatbot',
    desc: 'Built a smart AI chatbot using React & OpenAI API to streamline customer queries with NLP.',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    desc: 'A modern animated portfolio website built with React, MUI, and Framer Motion.',
    link: '#'
  },
  {
    title: 'Admin Dashboard',
    desc: 'A fully functional admin panel with authentication, analytics, and charts using Chart.js.',
    link: '#'
  }
];

const experiences = [
  {
    company: 'Tech Mahindra',
    role: 'Technical Support Agent',
    duration: 'March 2025 - June 2025',
    details: 'Provided technical assistance and support in a client-facing environment.'
  },
  {
    company: 'S.O. Infotech',
    role: 'Software Developer',
    duration: 'May 2024 - Nov 2024',
    details: 'Worked with Java, Spring Boot, and modern web tech to build scalable software solutions.'
  },
  {
    company: 'Myntra',
    role: 'Frontend Developer',
    duration: 'Aug 2024 - Oct 2024',
    details: 'Developed UI components using React for an e-commerce platform.'
  },
  {
    company: 'Meesho',
    role: 'SDE Intern',
    duration: 'Jan 2024 - Mar 2024',
    details: 'Collaborated on full-stack features and optimized application performance.'
  }
];

const education = [
  {
    institution: 'Pt. Deen Dayal Upadhyay Management College, Meerut',
    degree: 'Bachelors in Computer Science',
    duration: '2022 - 2025'
  },
  {
    institution: 'Ducat Delhi',
    degree: 'Back End Developer Training',
    duration: '2023 - 2024'
  },
  {
    institution: 'Ducat',
    degree: 'DSA & Programming Applications',
    duration: '2024 - 2025'
  }
];

const containerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function App() {
  return (
    <Box sx={{ fontFamily: 'Segoe UI, sans-serif', scrollBehavior: 'smooth' }}>
      <AppBar position="sticky" sx={{ bgcolor: '#0f172a' }}>
        <Toolbar>
          <Terminal sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Ankisha Mittal</Typography>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
            <Button key={item} color="inherit" href={`#${item.toLowerCase()}`}>{item}</Button>
          ))}
        </Toolbar>
      </AppBar>

      <Box id="home" sx={{ bgcolor: '#0f172a', color: 'white', py: 14, textAlign: 'center', px: 2 }} component={motion.div} variants={containerVariant} initial="hidden" animate="visible">
        <Typography variant="h3" fontWeight="bold">Hi, I'm Ankisha</Typography>
        <Typography variant="h6" sx={{ mt: 2 }}>Software Developer • Full Stack Java • AI Enthusiast</Typography>
        <Box mt={4}>
          <Button variant="contained" color="secondary" href="#contact" sx={{ mx: 1 }}>Let's Connect</Button>
          <Button variant="outlined" color="inherit" href="#projects" sx={{ mx: 1 }}>See Projects</Button>
        </Box>
      </Box>

      <Container id="about" sx={{ py: 10 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 4, alignItems: 'center', gap: 4, boxShadow: 4 }}>
            <Avatar sx={{ width: 120, height: 120, bgcolor: 'primary.main', fontSize: 32 }}>AM</Avatar>
            <Box>
              <Typography variant="h4" gutterBottom><Info sx={{ mr: 1 }} />About Me</Typography>
              <Typography variant="body1">
                Software Developer passionate about Full-Stack Java, Frontend with React, REST APIs, and delivering scalable products. Team-oriented and creative with experience across startup and enterprise environments.
              </Typography>
            </Box>
          </Card>
        </motion.div>
      </Container>

      <Container id="skills" sx={{ py: 10, bgcolor: '#f8fafc', borderRadius: 2 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom><Code sx={{ mr: 1 }} />Skills</Typography>
          <Grid container spacing={2} mt={2}>
            {skills.map((skill, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                <Chip label={skill} variant="outlined" color="primary" sx={{ width: '100%' }} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Container id="projects" sx={{ py: 10 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom><Work sx={{ mr: 1 }} />Projects</Typography>
          <Grid container spacing={4} mt={2}>
            {projects.map((proj, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card component={motion.div} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} sx={{ height: '100%', boxShadow: 6 }}>
                  <CardContent>
                    <Typography variant="h6">{proj.title}</Typography>
                    <Typography variant="body2" mt={1}>{proj.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={proj.link} target="_blank">Explore</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Container id="experience" sx={{ py: 10, bgcolor: '#f8fafc', borderRadius: 2 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom><EmojiObjects sx={{ mr: 1 }} />Experience</Typography>
          <Grid container spacing={4} mt={2}>
            {experiences.map((exp, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6">{exp.role}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{exp.company} | {exp.duration}</Typography>
                  <Typography variant="body2" mt={1}>{exp.details}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Container id="education" sx={{ py: 10 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom><School sx={{ mr: 1 }} />Education</Typography>
          <Grid container spacing={4} mt={2}>
            {education.map((edu, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ p: 3, height: '100%' }}>
                  <Typography variant="h6">{edu.degree}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">{edu.institution}</Typography>
                  <Typography variant="body2">{edu.duration}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      <Container id="contact" sx={{ py: 10, bgcolor: '#f1f5f9', borderRadius: 2 }}>
        <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom><ContactMail sx={{ mr: 1 }} />Contact Me</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>Let’s build something amazing together!</Typography>
          <Button variant="contained" startIcon={<Email />} href="mailto:ankishamittal10@gmail.com" sx={{ mr: 2 }}>ankishamittal10@gmail.com</Button>
          <IconButton href="https://github.com/" target="_blank" sx={{ mx: 1 }}><GitHub /></IconButton>
          <IconButton href="https://www.linkedin.com/in/ankisha-mittal-251a3b273" target="_blank" color="primary"><LinkedIn /></IconButton>
        </motion.div>
      </Container>

      <Box sx={{ bgcolor: '#0f172a', color: 'white', p: 3, textAlign: 'center', mt: 4 }}>
        <Typography variant="body2">© 2025 Ankisha Mittal — Designed & Built with ❤️</Typography>
      </Box>
    </Box>
  );
}

export default App;

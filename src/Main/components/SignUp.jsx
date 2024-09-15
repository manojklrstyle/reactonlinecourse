import React from 'react';
import { TextField, Button, Typography, Box, Container, Link } from '@mui/material';
import { WhatsApp, Facebook } from '@mui/icons-material';

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    window.location.href = '/landing';
  };

  return (
    <Box sx={styles.pageContainer}>
      <Box sx={styles.logoContainer}>
        <Box sx={styles.logoBackground}>
          <Typography variant="h4" sx={styles.logoText}>
            Online Learning
          </Typography>
        </Box>
      </Box>
      <Container component="main" maxWidth="xs">
        <Box sx={styles.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSignup} sx={styles.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={styles.submit}
            >
              Sign Up
            </Button>
            <Typography variant="body2" sx={styles.terms}>
              By clicking on Continue, I accept the Terms & Conditions, Privacy Policy & Refund Policy
            </Typography>
            <Typography variant="body2" sx={styles.login}>
              Already have an account? <Link href="/">Login</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={styles.socialIcons}>
        <WhatsApp />
        <Facebook />
      </Box>
    </Box>
  );
}

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#e6f2ff',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  logoText: {
    color: '#0033cc', 
    fontWeight: 'bold',
    fontSize: '1rem', 
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 2,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .1)',
  },
  form: {
    width: '100%',
    marginTop: 1,
  },
  submit: {
    margin: '24px 0 16px',
  },
  terms: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: '0.75rem',
  },
  login: {
    marginTop: 2,
    textAlign: 'center',
  },
  socialIcons: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    display: 'flex',
    gap: 2,
  },
};

export default Signup;

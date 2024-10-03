import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme, Paper, Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login({ onClose }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleSignIn = (provider, formData) => {
    // Hardcoded login logic (without length constraints)
    const username = formData.get('email');
    const password = formData.get('password');
  
    // Example of handling sign in (you can modify this as needed)
    if (username === 'student@123' && password === 'student123') {
      navigate('/student-dashboard');
      onClose(); // Close the modal on successful login
    } else if (username === 'faculty@123' && password === 'faculty123') {
      navigate('/faculty-dashboard');
      onClose(); // Close the modal on successful login
    } else if (username === 'admin@123' && password === 'admin123') {
      navigate('/admin-dashboard');
      onClose(); // Close the modal on successful login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogin = (role) => {
    // Navigate to the respective dashboard based on the role
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'faculty') {
      navigate('/faculty-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
    onClose(); // Close the modal after navigation
  };

  return (
    <AppProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
        }}
      >
        <Paper 
          elevation={5} 
          sx={{ 
            padding: '1.5rem', 
            maxWidth: 400, // Smaller width for the modal
            width: '100%', 
            maxHeight: 550,  // Adjust height if needed
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>

          {/* Displaying labels in TextField format */}
          <TextField
            label="Email"
            variant="standard"
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            label="Password"
            variant="standard"
            fullWidth
            sx={{ marginBottom: '1rem' }}
          />
          
          {/* Buttons for login options */}
          <Button 
            variant="outlined" 
            fullWidth 
            sx={{ marginBottom: '1rem' }} 
            onClick={() => handleLogin('student')}
          >
            Student Login
          </Button>
          <Button 
            variant="outlined" 
            fullWidth 
            sx={{ marginBottom: '1rem' }} 
            onClick={() => handleLogin('faculty')}
          >
            Faculty Login
          </Button>
          <Button 
            variant="outlined" 
            fullWidth 
            onClick={() => handleLogin('admin')}
          >
            Admin Login
          </Button>
        </Paper>
      </Box>
    </AppProvider>
  );
}
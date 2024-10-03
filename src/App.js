// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import AdminDashboard from './components/AdminDashboard';
import Launch from './components/Launch'; // Import the Launch component
import { Dialog } from '@mui/material';

const App = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleAboutOpen = () => {
    setAboutOpen(true);
  };

  const handleAboutClose = () => {
    setAboutOpen(false);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <Routes>
            <Route path="/" element={<Launch onAboutOpen={handleAboutOpen} onLoginOpen={handleLoginOpen} />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
        
        <Dialog open={aboutOpen} onClose={handleAboutClose}>
          <AboutUs onClose={handleAboutClose} />
        </Dialog>
        
        <Dialog open={loginOpen} onClose={handleLoginClose}>
          <Login onClose={handleLoginClose} /> {/* Ensure Login accepts onClose prop */}
        </Dialog>
      </div>
    </Router>
  );
};

export default App;

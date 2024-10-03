// AboutUs.js
import React from 'react';
import { DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const AboutUs = ({ onClose }) => {
  return (
    <div>
      <DialogTitle>About Our ERP System and College</DialogTitle>
      <DialogContent>
        <p>
          Our ERP system is designed to streamline the management of various academic and administrative processes within the college. 
          It offers features such as student record management, attendance tracking, grading, and communication tools.
        </p>
        <p>
          Our college is dedicated to providing high-quality education and fostering a community of learning and growth. With modern infrastructure and a focus on holistic development, we aim to prepare students for future success.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </div>
  );
};

export default AboutUs;

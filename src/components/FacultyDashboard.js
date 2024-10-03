import React from 'react';
import './FacultyDashboard.css';  // Custom CSS for the Faculty Dashboard

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Faculty Dashboard</h2>
      <ul>
        <li>Courses</li>
        <li>Grade Papers</li>
        <li>Request Leave</li>
        <li>Student Info</li>
        <li>Take Attendance</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Faculty Portal - ERP</h1>
      <div className="user-info">
        <p>Welcome Faculty 12345</p>
        <img src="profile-pic-url" alt="Profile" className="profile-pic" />
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
    </div>
  );
};

const FacultyDashboard = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content-area">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default FacultyDashboard;

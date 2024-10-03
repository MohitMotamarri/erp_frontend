import React from 'react';
import './AdminDashboard.css'; // Custom CSS for the Admin Dashboard

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>Enroll Student</li>
        <li>Enroll Faculty</li>
        <li>Leave Requests</li>
        <li>Students Info</li>
        <li>Faculty Info</li>
        <li>Fee Status</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>Admin Portal - ERP</h1>
      <div className="user-info">
        <p>Welcome Admin</p>
        <img src="profile-pic-url" alt="Profile" className="profile-pic" />
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      {/* Main content is empty */}
    </div>
  );
};

const AdminDashboard = () => {
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

export default AdminDashboard;

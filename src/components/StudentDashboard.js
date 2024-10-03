import React from 'react';
import { FaHome, FaBook, FaChalkboardTeacher, FaAward, FaProjectDiagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';  // Assuming custom CSS for student dashboard

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>KLU ERP</h2>
      <ul>
        <li><FaHome /> Home</li>
        <li>Attendance Register</li>
        <li>Courses</li>
        <li>Counselling Diary</li>
        <li>Exam Section</li>
        <li>Hostel Management</li>
        <li>Time Table</li>
        <li>Library</li>
        <li>My CGPA</li>
      </ul>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogout = () => {
    // Perform any additional logout logic here if needed
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="header">
      <h1>Student Portal - ERP</h1>
      <div className="user-info">
        <p>Welcome 2200030537</p>
        <img src="profile-pic-url" alt="Profile" className="profile-pic"/>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};



const MainContent = () => {
  return (
    <div className="main-content">
      <div className="cards-container">
        <Card title="Journals & Conferences" icon={<FaBook />} count="0" />
        <Card title="Awards & Recognitions" icon={<FaAward />} count="0" />
        <Card title="Workshops & Guest Lectures" icon={<FaChalkboardTeacher />} count="0" />
        <Card title="Projects & Consultancy" icon={<FaProjectDiagram />} count="0" />
      </div>
    </div>
  );
};

const Card = ({ title, icon, count }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{count}</p>
      </div>
    </div>
  );
};

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Sidebar />
      <div className="content-area">
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default StudentDashboard;

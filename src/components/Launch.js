// Launch.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Launch.css'; // Make sure to import your CSS

const Launch = ({ onAboutOpen, onLoginOpen }) => {
  return (
    <div className="launch-container">
      <nav className="navbar">
        <ul>
          <li><Link to="#" onClick={onAboutOpen}>About Us</Link></li>
          <li><Link to="#" onClick={onLoginOpen}>Login</Link></li> {/* Update to prevent page navigation */}
          <li className="welcome-text">Welcome to ERP System</li>
        </ul>
      </nav>
      <div className="content">
        
      </div>
    </div>
  );
};

export default Launch;

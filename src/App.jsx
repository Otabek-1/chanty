import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./imges/lgoo.jpg";
export default function App() {
  return (
    <div className="bg-light vh-100 vw-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white  px-4">
        {/* Left Side: Logo and Chanty Text */}
        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Chanty Logo" className="logo-img me-2" style={{ width: '50px', height: '50px' }} />
            <span style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: '#f12711' }}>Chanly</span>
          </Link>
        </div>

        {/* Right Side: Links and Button */}
        <div className="ms-auto d-flex align-items-center">
          <Link to="/community" className="text-decoration-none mx-2 text-dark">Community</Link>
          <Link to="/about-us" className="text-decoration-none mx-2 text-dark">About Us</Link>
          <Link to="/contact" className="text-decoration-none mx-2 text-dark">Contact</Link>
          <Link to="/faq" className="text-decoration-none mx-2 text-dark">FAQ</Link>
          <Link to="/get-started">
            <button className="btn start-button btn-primary ms-3">Get Started</button>
          </Link>
        </div>
      </nav>
      <div className="header-hero vw-100 h-75 d-flex justify-content-between align-items-center px-4">
        <div className="hero-texts">
          <h1 className="text">Build, share, and manage.</h1>
          <span>Create channels anywhere and manage them all here.</span>
        </div>
      </div>
    </div>
  );
}

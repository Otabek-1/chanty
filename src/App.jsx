import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./imges/lgoo.jpg";
import hero from './imges/video-calling.png';
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
        <div className="ms-auto d-flex align-items-center gap-4">
          <Link to="/community" className="text-decoration-none mx-2 text-dark ">Community</Link>
          <Link to="/about-us" className="text-decoration-none mx-2 text-dark">About Us</Link>
          <Link to="/contact" className="text-decoration-none mx-2 text-dark">Contact</Link>
          <Link to="/faq" className="text-decoration-none mx-2 text-dark">FAQ</Link>
          <Link to="/get-started">
            <button className="btn start-button btn-primary ms-3">Get Started</button>
          </Link>
        </div>
      </nav>
      <div className="header-hero vw-100 h-75 d-flex justify-content-between align-items-center px-5">
        <div className="shape"></div>
        <div className="hero-texts">
          <h1 className="text hero-title">Build, share, <br /> and manage.</h1>
          <span>Create channels anywhere and manage them all here.</span>
          <br />
          <br />
          <Link to="/auth" className='start-btn'>Get started</Link>
        </div>

        <div className="shape1"></div>
        <div className="hero-image">
          <img src={hero} alt="Video calling" />
        </div>
      </div>

      <main className="main">
        <section className="features">
          <h2 className="features-title">With us you can</h2>
            <div className="features-cards">
              <div className="feature-card"></div>
              <div className="feature-card"></div>
              <div className="feature-card"></div>
            </div>
        </section>
      </main>
    </div>
  );
}

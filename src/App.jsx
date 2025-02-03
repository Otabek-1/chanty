import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from "aos";
import logo from "./imges/lgoo.jpg";
import hero from './imges/video-calling.png';

import "./fontawesome-free-5.15.4-web/css/all.min.css"
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animatsiya davomiyligi (ms)
      once: true, // Bir marta ishlashi
    });
  }, [])
  return (
    <div className="bg-light vh-100 vw-100">
      <nav className="navbar navbar-expand-lg navbar-light   px-4" data-aos="fade-down">
        {/* Left Side: Logo and Chanty Text */}
        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center text-decoration-none">
            <img src={logo} alt="Chanty Logo" className="logo-img me-2" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
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
        <section className="features" data-aos="zoom-in">
          <h2 className="features-title">With us you can</h2>
          <div className="features-cards">
            <div className="feature-card">
              <div className="texts">
                <i className="fab fa-telegram-plane fa-7x" style={{color:"skyblue"}}></i>
                <h3>Effortless Telegram Channel Management</h3>
                <p>Control and manage all your Telegram channels from a single, convenient platform.</p>
              </div>
            </div>
            <div className="feature-card">
            <i className="fab fa-instagram fa-7x instagram-icon"></i>
              <h3>Streamline Your Instagram Management</h3>
              <p>Handle your Instagram account with ease, all from one central hub.</p>
            </div>
            <div className="feature-card">
              <img src={logo} alt="" style={{ borderRadius: "50%", width: "50%" }} />
              <h3>Seamlessly Manage <b>Chanly</b></h3>
              <p>Keep your <b>Chanly</b> channel organized and optimized effortlessly.</p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <h2>How it works</h2>

          <div className="instruction-container">
            <div className="column">
              <div className="instruction">
                <div className="instruction-number">1</div>
                <span><b>Log in</b> or <b>Sign up</b> in <b>Chanly</b></span>
              </div>
              <div className="instruction">
                <div className="instruction-number">2</div>
                <span>Create your <b>Chanly</b> channel</span>
              </div>
              <div className="instruction">
                <div className="instruction-number">3</div>
                <span>Connect your <b>Telegram</b>, <b>Instagram</b> channels (if you want)</span>
              </div>
              <div className="instruction">
                <div className="instruction-number">4</div>
                <span>Create posts, blogs, videos and publish them to your channels in one time</span>
              </div>
              <div className="instruction">
                <div className="instruction-number">5</div>
                <span><b>Subscribe</b> or <b>Buy plan</b> for more features</span>
              </div>
            </div>
          </div>
        </section>

        <section className="feedback">
          <div className="square"></div>
          <div className="square"></div>
          <div className="feedback-contents">
            <h3>Be among the first to experience <br /> it and share your thoughts with others!</h3>
            <span>Your feedback matters! Try it out now and let us know what you think. Help shape the future by sharing your experience!</span>
            <div className="buttons">
              <Link to="/auth" className='feedback-btn'>Try out now</Link>
              <Link to="/auth" className='feedback-btn'>Feedback</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
       <div className="el">
       <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center text-decoration-none" style={{transform:"scale(1.2)"}}>
            <img src={logo} alt="Chanty Logo" className="logo-img me-2" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
            <span style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: '#f12711' }}>Chanly</span>
          </Link>
        </div>
        <div className="ms-auto d-flex align-items-center gap-4">
          <Link to="/community" className="text-decoration-none mx-2 text-dark ">Community</Link>
          <Link to="/about-us" className="text-decoration-none mx-2 text-dark">About Us</Link>
          <Link to="/contact" className="text-decoration-none mx-2 text-dark">Contact</Link>
          <Link to="/faq" className="text-decoration-none mx-2 text-dark">FAQ</Link>
        </div>
       </div>
       <span><a href="/">Chanly</a> &copy; 2025</span>
      </footer>
    </div>
  );
}

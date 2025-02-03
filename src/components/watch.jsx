import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../styles/watch.css";
import video from "../imges/example.webm";
import avatar from "../imges/avatr.png";

export default function Watch() {
  const { watchlink } = useParams(); // URL parametridan olish
  const [icon, setIcon] = useState('play');
  const [progress, setProgress] = useState(0); // Progress bar uchun state
  const videoRef = useRef(null); // Video elementiga murojaat qilish uchun

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIcon('pause'); // Video o'ynaganda pause icon chiqishi kerak
    } else {
      videoRef.current.pause();
      setIcon('play'); // Video to'xtaganda play icon chiqishi kerak
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
    }
  };

  const handleSeek = (time) => {
    if (videoRef.current) {
      videoRef.current.currentTime += time; // Video vaqtini 5 soniya oldinga yoki orqaga o'tkazish
    }
  };

  return (
    <div className='watch bg-dark'>
      <div className="top">
        <div className="video-content">
          <video 
            src={video} 
            ref={videoRef} 
            onTimeUpdate={handleTimeUpdate}
          ></video>

          {/* Play/Pause tugmasi */}
          <div className="controls">
            <button className="seek-btn" onClick={() => handleSeek(-5)}>
            <i class="fas fa-forward" style={{transform:"rotate(180deg)"}}></i>
            </button>
            <div className="play-btn" onClick={handlePlayPause}>
              <i className={`fas fa-${icon}`}></i>
            </div>
            <button className="seek-btn" onClick={() => handleSeek(5)}>
            <i class="fas fa-forward"></i>
            </button>
          </div>

          {/* Video progress bar */}
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          
          <div className="video-info">
            <h3 className="video-title">A new story</h3>
            <Link to="/" className='author-prof'>
              <img src={avatar} alt="Avatar" />
              <div className="author-texts">
                <span className="name">Alvaro Nunez</span>
              </div>

              <Link className='author-btn'>View profile</Link>
              <Link className='author-btn'>Subscribe</Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

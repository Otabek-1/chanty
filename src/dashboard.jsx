import React, { useState } from 'react'
import './styles/dashboard.css'
import logo from './imges/lgoo.jpg'
import { Link } from 'react-router-dom'
import "./fontawesome-free-5.15.4-web/css/all.min.css"
import avatar from "./imges/avatr.png";
import Mainmenu from './layouts/main-menu'
import Trends from './components/trends'
import Interests from './components/interests'
import Categories from './components/categories'

export default function Dashboard() {
    const [menuOpen1, setMenuOpen1] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('home');

    return (
        <div className='main-dashboard bg-dark'>
            <div className="aside-menu">
                <Link to="/dashboard" className="d-flex align-items-center text-decoration-none">
                    <img src={logo} alt="Chanty Logo" className="logo-img me-2" style={{ width: '30px', height: '30px', borderRadius: "50%" }} />
                    <span style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: '#f12711' }}>Chanly</span>
                </Link>

                <Mainmenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            </div>
            <div className="others">
                <div className="search-field">
                    <div className="search-container">
                        <input type="text" placeholder="Search here..." className="search-input" />
                        <i className="fas fa-search"></i>
                    </div>

                    <div className="profile" onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={avatar} alt="Profile" className="profile-img" />
                        {menuOpen && (
                            <div className="profile-menu">
                                <div className="profile-menu-item">
                                    <i className="fas fa-user"></i>
                                    <span>Profile</span>
                                </div>
                                <div className="profile-menu-item">
                                    <i className="fas fa-film"></i>
                                    <span>Studio</span>
                                </div>
                                <div className="profile-menu-item">
                                    <i className="fas fa-cog"></i>
                                    <span>Settings</span>
                                </div>
                                <div className="profile-menu-item">
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span>Log out</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="filters">
                    <div className="filter-btn" onClick={() => setMenuOpen1(!menuOpen1)}>
                        <i className="fas fa-filter"></i>
                        Filter
                    </div>

                    {menuOpen1 && (
                        <div className="filter-menu">
                            <label>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="all"
                                    checked={selectedFilter === "all"}
                                    onChange={() => setSelectedFilter("all")}
                                />
                                All
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="videos"
                                    checked={selectedFilter === "videos"}
                                    onChange={() => setSelectedFilter("videos")}
                                />
                                Videos
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="filter"
                                    value="blogs"
                                    checked={selectedFilter === "blogs"}
                                    onChange={() => setSelectedFilter("blogs")}
                                />
                                Blogs
                            </label>
                        </div>
                    )}
                </div>

                <div className="contents">
                 {selectedMenu === 'home' && (
                    <div>
                           {(selectedFilter === 'all' || selectedFilter === 'videos') && (
                        <div className="videos">
                            <h2>
                                <i className="fas fa-video"></i>
                                Videos
                            </h2>

                            <div className="videos-container">
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                            </div>
                            <span className='show-btn'>Show more</span>
                        </div>
                    )}

                    {(selectedFilter === 'all' || selectedFilter === 'blogs') && (
                        <div className="videos">
                            <h2>
                                <i className="fas fa-blog"></i>
                                Blogs
                            </h2>

                            <div className="videos-container">
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>

                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                                <Link className="videos-item">
                                    <img src="https://picsum.photos/300/300" alt="" />
                                    <span className="video-title">A short story</span>
                                    <span className="author">Alvaro Nunez</span>
                                </Link>
                            </div>
                            <span className='show-btn'>Show more</span>
                        </div>
                    )}
                    </div>
                 ) || selectedMenu === "trends" && (
                    <Trends />
                 ) || selectedMenu === 'interests' && (
                    <Interests />
                 ) || selectedMenu === 'categories' && (
                    <Categories />
                 )}
                </div>
            </div>
        </div>
    )
}

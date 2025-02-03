import React from 'react'
import './styles/dashboard.css'
import logo from './imges/lgoo.jpg'
import { Link } from 'react-router-dom'
import "./fontawesome-free-5.15.4-web/css/all.min.css"

export default function Dashboard() {
    return (
        <div className='main bg-dark'>
            <div className="aside-menu">
                <Link to="/dashboard" className="d-flex align-items-center text-decoration-none">
                    <img src={logo} alt="Chanty Logo" className="logo-img me-2" style={{ width: '30px', height: '30px', borderRadius: "50%" }} />
                    <span style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: '#f12711' }}>Chanly</span>
                </Link>

                <div className="menus">
                    <div className="menu-item">
                        <i className="fas fa-home"></i>
                        <span>Home</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-fire"></i>
                        <span>Trends</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-heart"></i> {/* Interests uchun mosroq ikon */}
                        <span>Interests</span>
                    </div>
                    <div className="menu-item">
                        <i className="fas fa-th-large"></i> {/* Categories uchun to‘g‘ri ikon */}
                        <span>Categories</span>
                    </div>
                </div>
            </div>
            <div className="others">
                <div className="search-field"></div>
            </div>
        </div>
    )
}

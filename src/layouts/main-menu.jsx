import React, { useState } from 'react'

export default function Mainmenu({ selectedMenu, setSelectedMenu }) {
   
    return (

        <div className="menus">
            <div className={`menu-item ${selectedMenu === 'home'? 'active':""}`} onClick={()=>setSelectedMenu('home')}>
                <i className="fas fa-home"></i>
                <span>Home</span>
            </div>
            <div className={`menu-item ${selectedMenu === 'trends'? 'active':""}`}  onClick={()=>setSelectedMenu('trends')}>
                <i className="fas fa-fire"></i>
                <span>Trends</span>
            </div>
            <div className={`menu-item ${selectedMenu === 'interests'? 'active':""}`}  onClick={()=>setSelectedMenu('interests')}>
                <i className="fas fa-heart"></i> {/* Interests uchun mosroq ikon */}
                <span>Interests</span>
            </div>
            <div className={`menu-item ${selectedMenu === 'categories'? 'active':""}`}  onClick={()=>setSelectedMenu('categories')}>
                <i className="fas fa-th-large"></i> {/* Categories uchun to‘g‘ri ikon */}
                <span>Categories</span>
            </div>
        </div>

    )
}

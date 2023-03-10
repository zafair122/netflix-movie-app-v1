import React, { useState } from 'react'
import './navbar.scss'
import profile from '../../assets/profile/profile1.jpg'
import logo from '../../assets/logo/netflix-logo.png'
import { Search, Notifications, ArrowDropDown } from '@mui/icons-material'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    // console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={logo} alt="Logo Image" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon' />
                    <span>KIDS</span>
                    <Notifications className='icon' />
                    <img src={profile} alt="Profile Pic" />
                    <div className="profile">
                        <ArrowDropDown className='icon' />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
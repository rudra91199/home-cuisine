import React, { useState } from 'react';
import './Header.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useScrollPosition } from './../../../hooks/useScrollPosition';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const scrollPosition = useScrollPosition()
    const [user] = useAuthState(auth)
    const name = user?.displayName || location.state
    const [profile, setProfile] = useState(false)
    const [menu, setMenu] = useState(false)

    return (

        <div className={`navs ${location.pathname === '/' ? '' : 'header-bg'}  ${scrollPosition > 20 ? 'nav-scroll header-bg' : ''} `}>

            {/*Menu Icon For Mobile */}

            <i onClick={() => {
                setMenu(!menu)
            }} class={`fa-solid fa-bars ${location.pathname === '/' ? "" : "fa-bars-scrolled"} ${scrollPosition > 20 ? "fa-bars-scrolled" : ""}`} ></i>

            {/* Header  */}

            <h2 className={`nav-header ${location.pathname === '/' ? '' : 'd-block nav-header-scrolled'} ${scrollPosition > 20 ? "d-block nav-header-scrolled" : "d-none"}`}>Restaur<span>a</span> </h2>

            {/* Profile Icon  */}
            
            
                <button className={`profile ${location.pathname === '/' ? "" : "profile-scrolled"} ${scrollPosition > 20 ? "profile-scrolled" : ""}`} onClick={() => setProfile(!profile)}
                    onBlur={() => {
                        setTimeout(() =>
                            setProfile(false)
                            , 200)
                    }}
                >
                    <i className={`fa-solid fa-user profile-icon`}></i>
                </button>

            {/* Nav Links  */}

            <div className={`navlinks ${menu ? "" : "navlinks-none"}  ${scrollPosition > 20 ? "navlinks-scrolled" : ""} ${location.pathname === '/' ? '' : 'nHome-navlinks-scrolled'}`}>

                <NavLink to={'/'} end className={({ isActive }) =>
                    isActive ? 'nav-link home-nav' : 'nav-link'}
                >Home</NavLink>
                <NavLink to={'/services'} className={({ isActive }) =>
                    isActive ? ' nav-link service-nav' : 'nav-link'}>Services</NavLink>
                <NavLink to='foods' className={({ isActive }) =>
                    isActive ? " nav-link food-nav" : 'nav-link'}>Foods</NavLink>
                <NavLink to='blog' className={({ isActive }) =>
                    isActive ? " nav-link blog-nav" : 'nav-link'}>Blogs</NavLink>
                <NavLink to='about' className={({ isActive }) =>
                    isActive ? " nav-link about-nav" : 'nav-link'}>About</NavLink>

            </div>

            <div className={profile ? 'profile-div' : "profile-none"}>
                <i className="fa-solid fa-user profile-photo"></i>
                <p>{user ? name : 'No User'}</p>
                <hr className='profile-hr' />
                <p className='profile-function'>My Orders</p>
                <p className='profile-function'>Update Profile</p>
                {user ?
                    <button onClick={() => {
                        signOut(auth)
                        setTimeout(() =>
                            navigate("/login")
                            , 100)
                    }}>Log Out</button> :
                    <button onClick={() => navigate("/login")}>Log In <i className="fa-solid fa-right-to-bracket"></i></button>
                }
            </div>
        </div >


    );
};

export default Header;
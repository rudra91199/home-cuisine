import React from 'react';
import './Header.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useScrollPosition } from './../../../hooks/useScrollPosition';

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const scrollPosition= useScrollPosition()

    return (
        <div className={`navs ${location.pathname === '/'? '' : 'header-bg'}  ${scrollPosition>100? 'nav-scroll header-bg':''} `}>
            
            
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
                <NavLink to={'/login'} className={({ isActive }) =>
                    isActive ? ' nav-link login-nav' : 'nav-link'}>Login</NavLink>
           
        </div>
    );
};

export default Header;
import React from 'react';
import './HeaderLogo.css'
import logo from '../../../images/logo-01.png'
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderLogo = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={`logo-container ${location.pathname === '/'? '' : 'd-none'}`}>
            <img onClick={() => navigate('/')} src={logo} alt="" />
        </div>
    );
};

export default HeaderLogo;
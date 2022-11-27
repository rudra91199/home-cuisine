import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    const navigate= useNavigate();
    const location= useLocation();
    return (
        <div className='banner'>
            <p>High Quality</p>
            <h2>Healthy Food <br /> Healthy Life</h2>
            <button onClick={()=>navigate("foods")}>See Our Foods</button>
        </div>
    );
};

export default Banner;
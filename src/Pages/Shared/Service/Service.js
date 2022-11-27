import React from 'react';
import './Service.css'
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate= useNavigate()
    const { title, price, duration } = service
    return (
        <div className='service'>
            <h3>{title}</h3>
            <p><b>{price}</b></p>
            <p><small>{duration}</small></p>
            <div className='featured-div'>
                <div>
                    <li className="feature-1">{service.feature1}</li>
                    <li className="feature-2">{service.feature2}</li>
                    <li className="feature-3">{service.feature3}</li>
                </div>
            </div>
            <button onClick={()=>navigate("/checkout")}>Buy Now</button>
        </div>
    );
};

export default Service;
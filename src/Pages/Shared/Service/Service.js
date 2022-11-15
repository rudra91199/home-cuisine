import React from 'react';
import './Service.css'

const Service = ({ service }) => {
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
            <button>Add to cart</button>
        </div>
    );
};

export default Service;
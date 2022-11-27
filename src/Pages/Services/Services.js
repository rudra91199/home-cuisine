import React from 'react';
import Service from '../Shared/Service/Service';
import useServices from '../../hooks/useServices';
import './Services.css'

const Services = () => {
    const services=useServices();
    return (
        <div className='services'>
            <h2>Our All Packages</h2>
            <div className='regular-menu'>
            {services.map(service=>
                <Service key={service.title} service={service}/>)}
            </div>
        </div>
    );
};

export default Services;
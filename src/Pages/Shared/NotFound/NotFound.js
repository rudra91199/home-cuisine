import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import notFound from '../../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
                <img src={notFound} alt="" />
            <div>
                <h2>The page you are looking for can't be found.</h2>
                <Link to={'/'}>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
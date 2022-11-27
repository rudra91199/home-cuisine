import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../../Shared/Service/Service';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import './Home.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';


const Home = () => {
    const services = useServices()

    const [user]= useAuthState(auth)
    console.log(user);

    return (
        <div className='home'>
            <Banner />
            <Offer />
            <div className="homeService-container">
                <h2>My Services</h2>
                <div className='homeService'>

                    {services.slice(0, 3).map(service =>
                        <Service key={service.title} service={service} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
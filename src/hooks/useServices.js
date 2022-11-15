import {useState, useEffect} from 'react';

const useServices = () => {
    const [services, setServices]= useState([])

    useEffect(() => {
       fetch("feature.json") 
       .then(r=> r.json())
       .then(d=>setServices(d))
    },[])


    return services;
};

export default useServices;
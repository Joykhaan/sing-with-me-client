import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-primary font-bold text-3xl'>These are my best services to learn and make you a great singer! {services.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20'>
                 {
                services.map(service => <ServicesCard
                key={service.id}
                service={service}
                >

                </ServicesCard>)
                }   
                </div>
                
            </div>
        </div>
    );
};

export default Services;
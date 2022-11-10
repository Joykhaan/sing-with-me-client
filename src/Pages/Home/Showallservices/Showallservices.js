import React, { useEffect, useState } from 'react';
import Showallservicescard from './Showallservicescard';

const Showallservices = () => {
    const [allservices, setAllServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res=> res.json())
        .then(data=> setAllServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-primary font-bold text-5xl mt-24 mb-8'> These are my all {allservices.length} services to learn and make you a great singer! </h2>
                <p className='text-primary font-bold text-3xl'></p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20'>
                 {
                allservices.map(allservice => <Showallservicescard
                key={allservice._id}
                allservice={allservice}
                >

                </Showallservicescard>)
                }   
                </div>
                
            </div>
            
        </div>
    );
};

export default Showallservices;
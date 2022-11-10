import React, { useEffect, useState } from 'react';
import Showallservicescard from './Showallservicescard';

const Showallservices = () => {
    const [allservices, setAllServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setAllServices(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <p className='text-primary font-bold text-3xl'>These are my best services to learn and make you a great singer! {allservices.length}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:px-20'>
                 {
                allservices.map(allservice => <Showallservicescard
                key={allservice._id}
                allservice={allservice}
                >

                </Showallservicescard>)
                }   
                </div>
                <h2> this is all service {allservices.length}</h2>
            </div>
            
        </div>
    );
};

export default Showallservices;
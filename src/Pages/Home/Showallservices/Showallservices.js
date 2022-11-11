import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contextApi/Authprovider/Authprovider';
import Showallservicescard from './Showallservicescard';

const Showallservices = () => {
    const [allservices, setAllServices]=useState([]);
    const {loading}= useContext(AuthContext)
    useEffect(()=>{
        fetch('https://sing-with-me-server.vercel.app/allservices')
        .then(res=> res.json())
        .then(data=> setAllServices(data))
    },[])

    // spiner
    if(loading){
        return  <div className="flex justify-center items-center my-8">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
          <span className="visually-hidden"></span>
        </div>
      </div>
    }
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
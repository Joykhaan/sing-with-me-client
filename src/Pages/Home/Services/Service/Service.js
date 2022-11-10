import React, { useContext, useEffect, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contextApi/Authprovider/Authprovider';
import Review from '../Review/Review';

const Service = () => {
    const serviceDetails = useLoaderData()
    console.log('this is a', serviceDetails.img)
    const {user}=useContext(AuthContext);
    const [reviews, setReviews]=useState([]);
    const IID=  serviceDetails._id
    // console.log(IID)
    useEffect(()=>{
        fetch(`http://localhost:5000/review/${IID}`)
        .then(res=> res.json())
        .then(data=> setReviews(data))
    },[])

    const handleReview=event=>{
        if(!user?.email){
            alert('please login to add review')
        }
        else if(user?.email){
        event.preventDefault();
        const form= event.target;
        const review= form.review.value;
        const userName=user?.displayName||'not found';
        const userImg= user?.photoURL||'not found';
        const id= serviceDetails._id;
        const uid = user?.uid
        // console.log('this is fff',review);
        const postReview = {
            review,
            userName,
            userImg,
            id,
            uid
        }
        fetch('http://localhost:5000/review',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postReview)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('review succesful')
                form.reset();
            }
        })
        .catch(err=>console.error(err));
    }
        
    }

    return (
        <div>
            <h2 className='text-primary font-bold text-5xl mt-24 mb-8 text-center'>Service Details</h2>

            <div className='flex justify-center'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl w-1/2 ">
                    <figure><img src={serviceDetails.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{serviceDetails.price}</h2>
                        <h2 className="card-title">{serviceDetails.title}</h2>
                        <h1>price {serviceDetails.price}</h1>
                        <p>{serviceDetails.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <h2 className='text-primary font-bold text-5xl mt-24 mb-8 text-center'>Review section</h2>
            {/* <h2>review is {reviews.length}</h2> */}
            {
                reviews.map(revie=> <Review
                key={revie._id}
                revie={revie}
                ></Review>)
            }
            
           

            <form onSubmit={handleReview} className='mt-12 text-center'>
                <div>
                <textarea name='review' className="textarea textarea-primary w-80" placeholder="type your rivew" required></textarea>
                </div>
                <input className='btn btn-primary mb-10'  type="submit" value="review"/>
            </form>

        </div>
    );
};

export default Service;
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Myreview = () => {

    const myReviews=useLoaderData()
    return (
        <div>
            <h2>this is my review page</h2>
            {
                myReviews.map(myReview=> <div
                key={myReview._id}
                className='my-10'
                >
                    <h2 className='text-xl font-bold'> {myReview.userName}</h2>
            <div className='flex justify-center'>
                <img className='w-20' src={myReview.userImg} alt="" />
            </div>
            <h2>the name is {myReview.review}</h2>
                </div>)
            }
        </div>
    );
};

export default Myreview;
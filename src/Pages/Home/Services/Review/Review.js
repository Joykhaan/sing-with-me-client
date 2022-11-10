import React from 'react';



const Review = ({revie}) => {
 
    const{userName,userImg,review}=revie
    return (
        <div  className='mt-12'>
            
            <h2>{userName}</h2>
            <div className='flex justify-center'>
                <img className='w-20' src={userImg} alt="" />
            </div>
            <h2>{review}</h2>
        </div>
    );
};

export default Review;
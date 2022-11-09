import React from 'react';



const Review = ({revie}) => {
 
    const{userName,userImg,review}=revie
    return (
        <div  className='mt-12'>
            
            <h2>the name is {userName}</h2>
            <h2>the name is {review}</h2>
        </div>
    );
};

export default Review;
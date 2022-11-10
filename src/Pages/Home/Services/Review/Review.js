import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';



const Review = ({ revie }) => {

    const { userName, userImg, review } = revie
    return (
        <div className='bg-blue-100 w-1/3 mx-auto p-8 mb-8 mt-16'>

            <div className='flex justify-center mb-8'>
                <img className='w-20 rounded-full' src={userImg} alt="" />
                <h2 className='text-4xl text-primay mt-6 ml-4 font-bold text-center'> {userName}</h2>
            </div>
            <h2 className='text-primary font-bold  text-2xl'>Review:</h2>
            <h2 className='text-xl'>the name is {review}</h2>
            {/* <div className='flex'>
                        <span  className='text-3xl text-primary mt-6 mr-4'><FaEdit></FaEdit></span>
                        <span  className='text-3xl text-primary mt-6 mr-4'><FaTrashAlt></FaTrashAlt></span>
                     
                     
                     </div> */}
        </div>
    );
};

export default Review;
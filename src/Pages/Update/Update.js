import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contextApi/Authprovider/Authprovider';

const Update = () => {

    const reviews=useLoaderData(AuthContext)

    console.log('review',reviews._id)
    const [review, setReview]=useState(reviews);



    const handleupdate =event=>{

        event.preventDefault();
        console.log('user',review)
        fetch(`http://localhost:5000/delmyreview/${reviews._id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(review)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }


    const handleInputchange=event=>{
        const field= event.target.name;
        const value=event.target.value;
        const newReview={...review};
        newReview[field]=value;
        setReview(newReview)
    }
    return (
        <div>
            <div className='flex justify-center'>

                <form onSubmit={handleupdate}>
                    <div>
                        <label className="label">
                            <span className="label-text">review</span>
                        </label>
                        <textarea onChange={handleInputchange} name='review' defaultValue={reviews.review} className="textarea textarea-primary w-80" placeholder="type service description" reruired="true"></textarea>

                    </div>
                    <input className='btn btn-primary' type="submit" value="Update" />

                </form>
            </div>
        </div>
    );
};

export default Update;
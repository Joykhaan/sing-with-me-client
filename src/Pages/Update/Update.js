import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contextApi/Authprovider/Authprovider';

const Update = () => {

    const reviews=useLoaderData(AuthContext)
    const Myreview=reviews.map(review=>review)
    console.log(reviews)
    const [review, setReview]=useState({});



    const handleupdate =event=>{
        event.preventDefault();
    }
    const handleInputchange=event=>{
        const review= event.target.name;
        const value=event.target.value;
        const newReview={...review}
        newReview[review]=value;
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
                        <textarea onChange={handleInputchange} name='description' defaultValue={reviews.review} className="textarea textarea-primary w-80" placeholder="type service description" reruired="true"></textarea>

                    </div>
                    <input className='btn btn-primary' type="submit" value="Update" />

                </form>
            </div>
        </div>
    );
};

export default Update;
import React from 'react';
import { Link } from 'react-router-dom';

const Showallservicescard = ({allservice}) => {
    const {title,img,description,price,_id}=allservice
    console.log('service',allservice)
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{price}</h2>
                    <h2 className="card-title">{title}</h2>
                    {
                        description.length>200?<p>{ description.slice(0,200)+'....'} </p>: <p>{description}</p>
                    }
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showallservicescard;
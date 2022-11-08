import React from 'react';

const ServicesCard = ({service}) => {
    const {title,img,description,price}=service
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    {
                        description.length>200?<p>{ description.slice(0,200)+'....'} </p>: <p>{description}</p>
                    }
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
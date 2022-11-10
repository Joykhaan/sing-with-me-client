import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const ServicesCard = ({service}) => {
    const {title,img,description,price,_id}=service
    return (
        <div className='mx-8 md:mx-0'>
            <div className="card card-compact w-full bg-base-100 shadow-xl ">
                {/* <figure><img src={img} alt="Shoes" /></figure> */}

                <PhotoProvider>
      <PhotoView src="/1.jpg">
        <img src={img}alt="" />
        
      </PhotoView>
    </PhotoProvider>

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

export default ServicesCard;
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            {/* Banner start here */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.dawn.com/primary/2017/05/5909bdd94f8df.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Learn with Joy</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/allservices' className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
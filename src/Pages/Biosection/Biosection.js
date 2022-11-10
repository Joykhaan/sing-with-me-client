import React from 'react';

const Biosection = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold mb-6 mt-16 text-center text-primary'>Know more about Joy</h2>
            <div className="hero  ">
                <div className="hero-content flex-col lg:flex-row-reverse px-6 md:px-0">
                    <img src="https://m.timesofindia.com/thumb/msid-47628883,width-1200,height-900,resizemode-4/.jpg" className="w-full  md:w-1/2 h-full rounded-lg shadow-2xl"  alt=''/>
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biosection;
import React from 'react';
import { Link } from 'react-router-dom';

const Addservices = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(title, img, price,description)


        const addservices= {
            title,
            img,
            price,
            description
        }

        fetch('http://localhost:5000/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservices)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.acknowledged) {
                //     toast("Service Added Successfully");
                //     form.reset();
                // }
                if(data.acknowledged){
                    alert('review succesful')
                    form.reset();
                }
                
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h2>this is add services page</h2>

            <div className='flex justify-center'>

                <form onSubmit={handleAddService}>


                    <div>
                        <label className="label">
                            <span className="label-text">Add a Service Name</span>
                        </label>
                        <input name='title' type="text" placeholder="Service name" className="input input-bordered input-primary w-full max-w-xs block mb-8" reruired="true" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Add image Link</span>
                        </label>
                        <input name='img' type="text" placeholder="image url" className="input input-bordered input-primary w-full max-w-xs block mb-8" reruired="true" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text">Set Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs block mb-8" reruired="true" />

                    </div>


                    <div>
                    <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-primary w-80" placeholder="type service description" reruired="true"></textarea>
                        
                    </div>
                    <input className='btn btn-primary' type="submit" value="Add your service" />

                </form>
            </div>

        </div>
    );
};

export default Addservices;
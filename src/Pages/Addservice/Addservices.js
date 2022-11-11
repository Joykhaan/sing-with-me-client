import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addservices = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;



        const addservices= {
            title,
            img,
            price,
            description
        }

        fetch('https://sing-with-me-server.vercel.app/addservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addservices)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.acknowledged){
                    toast.success("service added!!",{
                        position:"top-center"
                    });
                    form.reset();
                }
                
            })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <h2 className='font-bold text-primary text-5xl text-center mb-8 mt-16'>this is add services page</h2>

            <div className='flex justify-center'>

                <form onSubmit={handleAddService}>


                    <div>
                        <label className="label">
                            <span className="label-text text-2xl">Add a Service Name</span>
                        </label>
                        <input name='title' type="text" placeholder="Service name" className="input input-bordered input-primary w-full max-w-xs block mb-8" required="true" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-2xl">Add image Link</span>
                        </label>
                        <input name='img' type="text" placeholder="image url" className="input input-bordered input-primary w-full max-w-xs block mb-8" required="true" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-2xl">Set Price</span>
                        </label>
                        <input name='price' type="text" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs block mb-8" required="true" />

                    </div>


                    <div>
                    <label className="label">
                            <span className="label-text text-2xl">Description</span>
                        </label>
                        <textarea name='description' className="textarea textarea-primary w-80" placeholder="type service description" required="true"></textarea>
                        
                    </div>
                    <input className='btn w-80 mb-16 mt-6 btn-primary' type="submit" value="Add your service" />

                </form>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default Addservices;
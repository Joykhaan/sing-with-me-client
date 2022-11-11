import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myreview = () => {

    const myReviews = useLoaderData()
    

    const handleDelete=(id) =>{
  
    const proced  =window.confirm('are you sure?? to delete is review');
    if(proced){
        fetch(`http://localhost:5000/delmyreview/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
               

                toast.success("Deleted Successfully",{
                    position:"top-center"
                });


            }

        })
    }
    }
    return (
        <div>
            <h2 className='text-primary font-bold text-5xl mt-24 mb-8 text-center'>This is your review page</h2>
            {
                myReviews.map(myReview => <div
                    key={myReview._id}
                    className='my-10'
                >
                    <div className='bg-blue-100 w-1/3 mx-auto p-8'>
                    <div className='flex justify-center mb-8'>
                        <img className='w-20 rounded-full' src={myReview.userImg} alt="" />
                      <h2 className='text-4xl text-primay mt-6 ml-4 font-bold text-center'> {myReview.userName}</h2>
                    </div>
                    <h2 className='text-primary font-bold  text-xl'>{myReview.title}</h2>
                    <h2 className='text-primary font-bold  text-2xl'>Review:</h2>
                    <h2 className='text-xl'>{myReview.review}</h2> 
                     <div className='flex'>
                       
                        <span className='text-3xl text-primary mt-6 mr-4'>
                            <Link to={`/update/${myReview._id}`}>
                            <FaEdit></FaEdit>
                            </Link>
                            </span>
                        <span onClick={()=>handleDelete(myReview._id)} className='text-3xl text-primary mt-6 mr-4'><FaTrashAlt></FaTrashAlt></span>
                     
                     
                     </div>
                    </div>
                    
                    <ToastContainer></ToastContainer>
                </div>)
            }
        </div>
    );
};

export default Myreview;
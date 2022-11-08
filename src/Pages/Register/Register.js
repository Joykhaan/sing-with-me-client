import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contextApi/Authprovider/Authprovider';

const Register = () => {

    const {register,updateUserProfile}=useContext(AuthContext)

    // const[error, setError]= useState('')
    
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleOnRegister = event=>{
        event.preventDefault();
        const form =event.target;
        const name = form.name.value
        const photourl= form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value

        register(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user)
            form.reset()
            navigate(from,{replace: true});
            handleUpdateUser(name,photourl);
            // setError('');
            
        })
        .catch(error=>{
            console.error(error)
            // setError(error.message)
          })
    }

    const handleUpdateUser =(name,photourl)=>{
        const profile={
            displayName: name,
            photoURL: photourl
        }
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=>console.error(error))
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleOnRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Full name</span>
                                </label>
                                <input name='name' type="text" placeholder="your name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg">Photo URL</span>
                                </label>
                                <input name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <p>Allready registered? please   <Link to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
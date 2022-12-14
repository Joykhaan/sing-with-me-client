import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contextApi/Authprovider/Authprovider';

const Login = () => {

  const navigate = useNavigate()
  const { logIn,googlePopUp,loading,gitLogin} = useContext(AuthContext);
  const location = useLocation();
  const googleProvider = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider();

  const from = location.state?.from?.pathname || '/';


  const handleGoogleSignIn=()=>{
    googlePopUp(googleProvider)
    .then(result =>{
        const user = result.user;
            console.log(user);
    })
    .catch(error =>console.error(error))
}

const handleGitSignIn=()=>{
    gitLogin(gitProvider)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error =>console.error(error))
}

  const handleonLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        toast.success("Deleted Successfully",{
            position:"top-center"
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error)
      })
  }

//   spiner
  if(loading){
    return  <div className="flex justify-center items-center my-8">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600" role="status">
      <span className="visually-hidden"></span>
    </div>
  </div>
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


                        <form onSubmit={handleonLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                  <p>not register ? please   <Link to='/register' className='text-primary font-bold'>Register</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                           
                        </form>
                        <ToastContainer></ToastContainer>
                        <p className='text-center mb-8'> Or try to login with <button onClick={handleGoogleSignIn} className="btn btn-primary py-2 ml-4">Google</button> </p>
                        
                        <p className='text-center mb-8'> Or try to login with <button onClick={handleGitSignIn} className="btn btn-primary py-2 ml-4">Github</button> </p>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
};

export default Login;
import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../contextApi/Authprovider/Authprovider';

const Header = () => {

    const {user,logOut}=useContext(AuthContext);
    console.log('user',user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems=<div className='md:flex text-2xl font-bold md:text-slate-100'>
    <li>  <Link to='/'>Home</Link> </li>
    <li>  <Link to='/blog'>Blog</Link> </li>
    <li>  <Link to='/login'>Login</Link> </li>
    {user?.email?<li>  <Link onClick={handleLogOut}>Logout</Link> </li>:<li>  <Link className='hidden'>Logout</Link> </li>}
    {user?.email?<li>  <Link to={`/myreview/${user.uid}`} >My Review Page</Link> </li>:<li>  <Link className='hidden'>My Review Page</Link> </li>}
    {user?.email?<li>  <Link to={`/addservices`} >Add services</Link> </li>:<li>  <Link className='hidden'>Add services</Link> </li>}
    </div>
    return (
        <div>

            {/* navbar start from here */}
            <div className="navbar bg-primary py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case md:text-3xl text-slate-100 font-bold">Sing with me</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn">Get started</Link>
                </div>
            </div>
        {/* navbar end */}

        

        </div>
    );
};

export default Header;
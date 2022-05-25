import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
const Header = () => {
    const [user, loading] = useAuthState(auth);
 
    const userImg = user?.photoURL;
    const name = user?.displayName?.slice(0, 1);

    if (loading ) {
        return <Loading></Loading>
    }
    return (
        <div className='  lg:px-12 bg-[#313132]  '>
            <div className="navbar  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Blog</Link></li>
                            <li> <Link to='/portfolio' className="justify-between"> My Portfolio </Link></li>
                            <li><Link to='/' >tools</Link></li>
                            {user ? <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-25 rounded-full">
                                        {userImg ? <img src={userImg} alt='' /> : <h3 className="w-10  text-white  text-3xl border-2  ">{name}</h3>}
                                    </div>
                                </label>
                                <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 ">
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                    <li><button onClick={() => signOut(auth)}>Logout</button></li>
                                </ul>
                            </div> : <div className="navbar-end ">
                                <div className="dropdown dropdown-end ">
                                    <ul>
                                        <li><Link className=' text-black' to='/login'>Login</Link></li>
                                    </ul>
                                </div>
                            </div>}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">DRILLCO</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white">
                        <li><Link to="/">Blog</Link></li>
                        <li ><Link className='' to='/portfolio'>My Portfolio</Link></li>
                        <li><Link to='/'>tool</Link></li>
                    </ul>

                </div>
                {user ?
                    <div className="navbar-end hidden lg:flex">

                        <div className="dropdown dropdown-end ">

                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {userImg ? <img src={userImg} alt='' /> : <h3 className="w-10  text-white  text-3xl border-2  ">{name}</h3>}
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={() => signOut(auth)}>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                    :
                    <div className="navbar-end hidden lg:flex">
                        <div className="dropdown dropdown-end hidden lg:flex  ">
                            <Link className=' text-base-100' to='/login'>Login</Link>
                        </div>
                    </div>

                }
                
                {/* dashboard side bar  */}
                <div className="navbar-end lg:hidden">
                    <label htmlFor="sidebar" tabIndex="0" className="btn btn-ghost  text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
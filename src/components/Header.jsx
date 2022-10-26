import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { photoURL, displayName } = user;
    // console.log(photoURL)


    const logOutHandler = () => {
        logOut()
        window.location.reload()
    }


    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        <BookOpenIcon className='w-8 text-green-400'></BookOpenIcon>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-slate-300">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/courses"}>Courses</Link></li>
                        <li><Link to={"/faq"}>FAQ</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        <li><Link to={"/login"}>Log in</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
                <Link to={""} className="btn btn-ghost normal-case  ">
                    <div className='flex'>
                        <div className='me-2'>
                            <BookOpenIcon className='md:w-8 text-green-400'></BookOpenIcon>
                        </div>
                        <div className='md:text-xl text-base'>
                            <p className='text-sky-500'><span></span>Esho<span className='text-rose-500'>Shikhi</span></p>
                        </div>
                    </div>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-300">
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/courses"}>Courses</Link></li>
                    <li><Link to={"/faq"}>FAQ</Link></li>
                    <li><Link to={"/blog"}>Blog</Link></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <Link to={""} className="btn">Get started</Link>
            </div> */}
            <div className='navbar-end me-2'>
                <div>
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-violet-300'><Link to={"/login"}>Log in</Link></li>
                        <li className='text-purple-300'><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
                {
                    user.email &&
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    photoURL ? <img src={photoURL} alt="user-profile" /> : <UserCircleIcon></UserCircleIcon>

                                }
                                {/* <UserCircleIcon></UserCircleIcon> */}
                            </div>


                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li className='text-center'>{displayName ? displayName : 'User Profile'}</li>
                            <li><Link to={"/profile"}>User Profile</Link></li>
                            <li><Link to={""}>Settings</Link></li>
                            <li><button onClick={logOutHandler} className="btn btn-outline btn-info">Log Out</button></li>
                        </ul>
                    </div>
                }



            </div>
        </div>
    );
};

export default Header;
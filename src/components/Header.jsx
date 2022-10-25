import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/courses"}>Courses</Link></li>
                        <li><Link to={"/faq"}>FAQ</Link></li>
                        <li><Link to={"/blog"}>Blog</Link></li>
                        <li><Link to={"/login"}>Log in</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
                <Link to={""} className="btn btn-ghost normal-case text-xl">
                    <div className='flex'>
                        <div className='me-2'>
                            <BookOpenIcon className='w-8 text-green-400'></BookOpenIcon>
                        </div>
                        <div>
                            <p className='text-sky-500'><span></span>Esho<span className='text-rose-500'>Shikhi</span></p>
                        </div>
                    </div>

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
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
                        <li><Link to={"/login"}>Log in</Link></li>
                        <li><Link to={"/register"}>Register</Link></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <UserCircleIcon></UserCircleIcon>
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to={"/profile"}>Profile</Link></li>
                        <li><Link to={""}>Settings</Link></li>
                        <li><Link to={""}>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
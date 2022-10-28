import React from 'react';
import { UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Header = () => {
    const { user, logOut, dark, setDark } = useContext(AuthContext);



    const logOutHandler = () => {
        logOut()
        window.location.reload()
    }

    // let isDark = false;

    const themeHandler = (event) => {
        event.preventDefault()
        const isDark = !dark;
        setDark(isDark);
        console.log(dark);


    }


    return (
        <div className="navbar bg-neutral">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
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

            <div className='navbar-end me-2'>



                <div>
                    {
                        user?.uid ||
                        <ul className="menu menu-horizontal p-0">
                            <li className='text-violet-300'><Link to={"/login"}>Log in</Link></li>
                            <li className='text-purple-300'><Link to={"/register"}>Register</Link></li>
                        </ul>

                    }
                </div>

                <div>
                    {
                        user?.uid &&
                        <div className={"dropdown dropdown-end"}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.photoURL ? <img src={user?.photoURL} alt="user-profile" /> : <UserCircleIcon></UserCircleIcon>

                                    }

                                </div>


                            </label>
                            <ul tabIndex={0} className={dark ? " bg-black text-base-200 mt-3 p-2 shadow menu menu-compact dropdown-content  rounded-box w-52" : " mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"}>
                                <li className='text-center text-indigo-600'>{user?.displayName ? `${user?.displayName}` : 'User Profile'}</li>
                                <li>
                                    <div>
                                        <div><p>Theme: <small>(double click)</small> </p></div>
                                        <div>
                                            <form>
                                                <input onChange={themeHandler} type="checkbox" name='theme' className="toggle toggle-sm" />
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li><Link to={"/profile"}>User Profile</Link></li>
                                <li><Link to={""}>Settings</Link></li>
                                <li><button onClick={logOutHandler} className="btn btn-outline btn-info">Log Out</button></li>
                            </ul>
                        </div>
                    }
                </div>





            </div>
        </div>
    );
};

// mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../images/content-img/error-404.png';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <img className='w-full rounded-2xl' src={errorImg} alt="" />

                <div className='text-center'>
                    <Link to={'/'}> <p className='btn'>Back to Home</p> </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
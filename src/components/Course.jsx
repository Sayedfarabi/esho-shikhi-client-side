import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid'

const Course = () => {
    const course = useLoaderData();
    // console.log(course)
    return (
        <div className='md:w-3/5 mx-auto w-4/5 my-5'>
            <div className="card lg:card-side bg-indigo-200 shadow-xl">
                <figure className='md:w-full'><img src={`${course?.image ? course.image : "Image not supported"}`} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{course.name}</h2>
                    <p>{course.body}</p>
                    <div className="card-actions justify-between">
                        <div>
                            <h6 className='text-xl'>Enroll : {course.enroll}</h6>
                        </div>
                        <div>
                            <h6 className='text-xl'>Lesson : {course.lesson}</h6>
                        </div>
                        <div className='flex items-center'>
                            <h6 className='text-xl me-2'>Ratting : {course.ratting}</h6>
                            <div>
                                <h6 className='flex'>
                                    <StarIcon className='w-4 text-amber-500'></StarIcon>
                                    <StarIcon className='w-4 text-amber-500'></StarIcon>
                                    <StarIcon className='w-4 text-amber-500'></StarIcon>
                                    <StarIcon className='w-4 text-amber-500'></StarIcon>
                                    <StarIcon className='w-4 text-amber-500'></StarIcon>
                                </h6>
                            </div>
                        </div>
                        <div>
                            <Link to={'/order'}><button className="btn btn-primary">Get premium access</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;
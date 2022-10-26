import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CoursesContext } from './Root';
import { ChevronDoubleDownIcon } from '@heroicons/react/24/solid';


const Courses = () => {

    const { courses } = useContext(CoursesContext);
    // console.log(courses)
    return (
        <div className='md:flex mx-5 w-full'>
            <div className='w-full md:w-4/12 md:h-screen rounded border border-teal-500 bg-slate-200 text-center px-2 pt-8'>
                {/* <select className="select select-bordered select-lg w-full max-w-xs">
                    <option disabled selected>Select Your Course</option>

                    {
                        courses.map(course => {
                            return <option className='text-lime-600' key={`${course.id}`}>
                                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                            </option>

                        })
                    }
                </select> */}
                <h3 className='text-4xl text-fuchsia-700 bolder'>Select Your Course</h3>
                <ul className="menu w-full">
                    {
                        courses.map(course => {
                            return <li className='text-indigo-700' key={`${course.id}`}>
                                <Link to={`/courses/${course.id}`}>
                                    {course.name}
                                </Link>
                            </li>

                        })
                    }
                </ul>
            </div>
            <div className='w-full md:w-8/12 text-center bg-gray-600 px-4 py-3 pt-8'>
                <div className='grid md:grid-cols-2 gap-4'>
                    {
                        courses.map(course => {
                            return <div className="card card-compact w-96 bg-blue-300 shadow-xl">
                                <figure><img src={`${course.image ? course.image : "Image not supported"}`} alt="img not support" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{`${course.name}`}</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/courses/${course.id}`}>
                                            <button className="btn btn-primary">
                                                Details
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
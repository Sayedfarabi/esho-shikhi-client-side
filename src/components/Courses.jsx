import React from 'react';
import { useContext } from 'react';
import { CoursesContext } from './Root';

const Courses = () => {
    const courses = useContext(CoursesContext);
    console.log(courses)
    return (
        <div>
            <h1>This is Courses Page</h1>
        </div>
    );
};

export default Courses;
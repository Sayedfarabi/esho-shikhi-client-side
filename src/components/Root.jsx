// import React, { useState } from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
export const CoursesContext = createContext([]);


const Root = () => {

    const courses = useLoaderData();


    const coursesInfo = {
        courses
    }



    return (
        <>
            <CoursesContext.Provider value={coursesInfo}>
                <Header></Header>
                <div className='min-h-screen'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </CoursesContext.Provider>

        </>
    );
};

export default Root;
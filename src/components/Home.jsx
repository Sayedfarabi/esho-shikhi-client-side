import React from 'react';
import images1 from '../images/content-img/learning-1.png';
import images2 from '../images/content-img/learning-2.png';

const Home = () => {
    return (
        <div>
            <div className=' md:flex md:justify-around mx-12 px-3'>
                <div className='w-3/5 border'>
                    <h1 className='text-sky-800 text-7xl bolder'>Develop Your Skill ... <br /> <span className='text-blue-600'>Lead the world...</span> </h1>
                </div>
                <div className='w-2/5 border'>
                    <img className='w-full bg-base-200 rounded-full' src={images1} alt="" />
                </div>
            </div>
            <div className='md:flex md:justify-around m-12 px-3 w-full'>
                <div>
                    <div className='w-3/5 h-full border'>
                        <img className='w-3/4 bg-base-200 rounded-full' src={images2} alt="" />
                    </div>
                </div>
                <div>
                    <div className='w-3/5 h-full border'>
                        <h1 className='text-sky-800 text-7xl bolder'>Develop Your Skill ... <br /> <span className='text-blue-600'>Lead the world...</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
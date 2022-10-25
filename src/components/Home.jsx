import React from 'react';
import images1 from '../images/content-img/learning-1.png';
import images2 from '../images/content-img/learning-2.png';
import bgImg from '../images/bg-img/home-bg.png';

const Home = () => {
    return (
        <div className='border bg-zinc-800' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundRepeat: 'no-repeat' }}>
            <div className='mx-5'>
                <div className=' md:flex md:justify-around w-full mx-auto px-3 my-4'>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <div>
                            <h1 className='text-orange-600 text-7xl bolder'>Develop Your Skill <br /> <span className='text-blue-600'>Lead the world</span> </h1>
                            <p className='mt-5 bg-neutral-600'>Gaining skills is one of the most important things you can do to develop your work. It is the ability to do something well. A well-developed skill can make us master in a particular field, and it can be learned too. Learning new skills helps in your professional life a lot.</p>
                        </div>

                    </div>
                    <div className='md:w-1/2 flex justify-center items-center'>
                        <img className='w-5/5 rounded-full' src={images2} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
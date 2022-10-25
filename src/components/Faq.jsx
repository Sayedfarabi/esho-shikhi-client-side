import React from 'react';
import bgImg from '../images/bg-img/FAQ-bg2.png';

const Faq = () => {
    return (
        <div className='text-center' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-6xl bolder pt-5'>This is FAQ Page</h1>
        </div>
    );
};

export default Faq;
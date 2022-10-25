import React from 'react';
import bgImg from '../images/bg-img/Blog-bg.jpg';

const Blog = () => {
    return (
        // <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundRepeat: 'no-repeat' }>
        //     <h1>This is Blog Section</h1>
        // </div>
        <div className='text-slate-200' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundRepeat: 'no-repeat' }}>
            <h1 className='text-center text-5xl bolder text-purple-300 pt-4'>Answer to some questions</h1>
            <div className='md:w-2/3 w-4/5 py-12 mx-auto'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is cors ?
                    </div>
                    <div className="collapse-content">
                        <p>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </div>
                    <div className="collapse-content">
                        <p>
                            1. Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. <br></br>
                            2. Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication .
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does the private route work?
                    </div>
                    <div className="collapse-content">
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-slate-900 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is Node? How does Node work?
                    </div>
                    <div className="collapse-content">
                        <p>1. A Node is a data structure that stores a value that can be of any data type and has a pointer to another node. <br />
                            2. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';



const Register = () => {
    const { createUser, setError, error } = useContext(AuthContext)

    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;

        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // const file = form.file.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // setError('');
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                // setError('Error : Please check your Email or Password validation ...');
                // setError(error.message)
            })


        // console.log(name, file, email, password)
    }






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card w-full shadow-3xl bg-base-100">
                        <h2 className='text-center text-5xl py-3 text-sky-600'>Register Now !!</h2>
                        <div className='w-4/5 mx-auto'>
                            <p className='text-center text-xl text-rose-600'>{error}</p>
                        </div>
                        <form onSubmit={submitHandler} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl bolder">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type your full name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl bolder">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl bolder">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-2xl bolder">Photo</span>
                                </label>
                                <input type="file" name='file' placeholder="Select Your Photo" className="input" />

                                <label className="label">
                                    <p>Have an account ? Please <Link to={'/login'} className="label-text-alt link link-hover text-indigo-600 text-lg">Log in</Link> </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
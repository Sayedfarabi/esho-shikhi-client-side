import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import toast from 'react-hot-toast';



const Register = () => {
    const { createUser, verifyEmail, setLoading, profileUpdate, setRegisterError, registerError } = useContext(AuthContext);


    const navigate = useNavigate();

    const submitHandler = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                setLoading(true);
                verificationEmail();
                updateNameAndPhoto(name, photo);
                form.reset();
                toast.success('Please verify your Email Address before Login');
                navigate('/login');
            })
            .catch(error => {
                const errorMessage = error.message;
                setRegisterError(errorMessage);
            })

        const verificationEmail = () => {
            verifyEmail()
                .then(result => {
                    // alert('Please check your Email and verify your Email Address.');
                })
                .catch(error => {
                    const errorMessage = error.message;
                    setRegisterError(errorMessage);
                })
        }

        const updateNameAndPhoto = (name, photo) => {
            const profile = {
                displayName: name,
                photoURL: photo
            }
            profileUpdate(profile)
        }

    }






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card w-full shadow-3xl bg-base-100">
                        <h2 className='text-center text-5xl py-3 text-sky-600'>Register Now !!</h2>
                        <div className='w-4/5 mx-auto'>
                            <p className='text-center text-xl text-rose-600'>{registerError}</p>
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
                                <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />

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
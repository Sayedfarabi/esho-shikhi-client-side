import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const { logIn, error, setError, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
                form.reset()
            })

    }

    const googleHandler = () => {
        signInWithGoogle()
    }
    const gitHubHandler = () => {
        signInWithGitHub()
    }




    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <h2 className='text-center text-5xl py-3 text-sky-600'>Log in Now !!</h2>
                        <div className='w-4/5 mx-auto'>
                            <p className='text-center text-xl text-rose-600'>{error}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to={''} className="label-text-alt text-warning link link-hover">Forgot password?</Link>
                                </label>
                                <div className='mx-auto mt-5'>
                                    <div>
                                        <button onClick={googleHandler} className="btn btn-xs btn-outline btn-success">
                                            Sign in with Google
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button onClick={gitHubHandler} className="btn btn-xs btn-outline btn-info">
                                            Sign in with Github
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
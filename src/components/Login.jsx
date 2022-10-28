import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const { logIn, setUserEmail, resetPassword, loginError, setLoginError, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log(from);

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
                setLoginError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setLoginError(errorMessage);
                form.reset()
            })

    }

    const googleHandler = () => {
        signInWithGoogle()
            .then(result => {
                loginError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                loginError(errorMessage);
            })
    }
    const gitHubHandler = () => {
        signInWithGitHub()
            .then(result => {
                loginError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                loginError(errorMessage);
            })
    }

    const handleEmailBlur = (event) => {
        const email = event.target.value;
        setUserEmail(email);
    }


    const handleResetPassword = (userEmail, setUserEmail) => {
        if (userEmail) {
            resetPassword(userEmail)
            setUserEmail('')
        } else {
            alert('Please provide your input Email');
        }
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">

                    <div className="card w-full shadow-2xl bg-base-100">
                        <h2 className='text-center text-5xl py-3 text-sky-600'>Log in Now !!</h2>
                        <div className='w-4/5 mx-auto'>
                            <p className='text-center text-xl text-rose-600'>{loginError}</p>
                        </div>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmailBlur} type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <p>Forgot password? <button onClick={handleResetPassword} className='btn btn-info btn-xs'>Please Reset</button></p>
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
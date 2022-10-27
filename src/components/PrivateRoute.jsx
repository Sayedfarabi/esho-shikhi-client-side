import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(loading)

    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <div>
                    <progress className="progress w-56"></progress>
                </div>
            </div>
        )

    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to={'/login'} state={{ form: location }} replace></Navigate>

};

export default PrivateRoute;